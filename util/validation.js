function isEmpty(value) {
  return !value || value.trim() === "";
}
function userCredsValid(email, pass) {
  return email && email.includes("@") && pass && pass.trim().length > 5;
}

function emailIsConfirmed(email, confirmEmail) {
  return email === confirmEmail;
}
function userDetailsValid(email, pass, name, street, postal, city) {
  return (
    userCredsValid(email, pass) &&
    !isEmpty(name) &&
    !isEmpty(street) &&
    !isEmpty(postal) &&
    !isEmpty(city)
  );
}

module.exports = {
  userDetailsValid: userDetailsValid,
  emailIsConfirmed: emailIsConfirmed,
  userCredsValid: userCredsValid,
};
