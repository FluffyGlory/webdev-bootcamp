function guardRoute(res, req, next) {
  if (!res.locals.isAuth) {
    return res.redirect("/401");
  }
  next();
}
module.exports = guardRoute;