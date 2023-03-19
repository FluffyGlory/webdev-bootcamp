function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
  form.firstElementChild.lastElementChild.value =
    players[editedPlayer - 1].name;
}
function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  form.firstElementChild.classList.remove("error");
  errorsOutput.textContent = "";
  form.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredName = formData.get("playername").trim();
  if (!enteredName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutput.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPlayerData = document.getElementById(
    "p" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredName;

  players[editedPlayer - 1].name = enteredName;
  closePlayerConfig();
}
