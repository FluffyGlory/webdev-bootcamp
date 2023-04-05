function postIsValid(title, content) {
  return title && content && title.trim() !== "" && content.trim() !== "";
}
function credentialsAreValid(
  enteredEmail,
  enteredConfirmEmail,
  enteredPassword
) {
  return (
    enteredEmail &&
    enteredConfirmEmail &&
    enteredPassword &&
    enteredPassword.trim().length > 6 &&
    enteredEmail === enteredConfirmEmail &&
    enteredEmail.includes("@")
  );
}
module.exports = {
  postIsValid: postIsValid,
  credentialsAreValid: credentialsAreValid,
};
