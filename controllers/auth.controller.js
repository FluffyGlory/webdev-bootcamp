const User = require("../models/user.model");
const authUtil = require("../util/auth.util.js");
const validation = require("../util/validation");
const sessionFlash = require("../util/session-flash");

function getSignup(req, res) {
  let sessionData = sessionFlash.getSessionData(req);

  if (!sessionData) {
    sessionData = {
      email: "",
      confirmEmail: "",
      password: "",
      fullname: "",
      street: "",
      postal: "",
      city: "",
    };
  }
  res.render("customer/auth/signup", { inputData: sessionData });
}

async function signup(req, res, next) {
  const rb = req.body;
  const enteredData = {
    email: rb.email,
    confirmEmail: rb["confirm-email"],
    password: rb.password,
    fullname: rb.fullname,
    street: rb.street,
    postal: rb.postal,
    city: rb.city,
  };
  if (
    !validation.userDetailsValid(
      rb.email,
      rb.password,
      rb.fullname,
      rb.street,
      rb.postal,
      rb.city
    ) ||
    !validation.emailIsConfirmed(rb.email, rb["confirm-email"])
  ) {
    sessionFlash.flashData(
      req,
      {
        errorMessage:
          "Please check all fields for errors. Password must be greater than 6 characters.",
        ...enteredData,
      },
      function () {
        res.redirect("/signup");
      }
    );

    return;
  }

  const user = new User(
    rb.email,
    rb.password,
    rb.fullname,
    rb.street,
    rb.postal,
    rb.city
  );

  try {
    if (await user.getUserByEmail()) {
      sessionFlash.flashData(
        req,
        {
          errorMessage: "This account already exists! Try logging in instead.",
          ...enteredData,
        },
        function () {
          res.redirect("/signup");
        }
      );
      return;
    }

    await user.signup();
  } catch (error) {
    return next(error);
  }

  res.redirect("/login");
}

function getLogin(req, res) {
  let sessionData = sessionFlash.getSessionData(req);

  if (!sessionData) {
    sessionData = {
      email: "",
      password: "",
    };
  }

  res.render("customer/auth/login", { inputData: sessionData });
}

async function login(req, res, next) {
  const user = new User(req.body.email, req.body.password);
  const errorSessionData = {
    errorMessage: "Invalid credentials - double check your email and password.",
    email: user.email,
    password: user.password,
  };

  let existingUser;
  try {
    existingUser = await user.getUserByEmail();
  } catch (error) {
    next(error);
  }

  if (!existingUser) {
    sessionFlash.flashData(req, errorSessionData, function () {
      res.redirect("/login");
    });

    return;
  }
  const passwordIsCorrect = await user.comparePasswords(existingUser.password);

  if (!passwordIsCorrect) {
    sessionFlash.flashData(req, errorSessionData, function () {
      res.redirect("/login");
    });
    return;
  }

  authUtil.createUserSession(req, existingUser, function () {
    res.redirect("/");
  });
}

function logout(req, res) {
  authUtil.destroyUserSession(req);
  res.redirect("/");
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
  login: login,
  logout: logout,
};
