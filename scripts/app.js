const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let isGameOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const form = document.querySelector("form");
const errorsOutput = document.getElementById("config-errors");
const gameBoard = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const gameFieldElements = document.getElementById("game-board");
const editP1Btn = document.getElementById("editP1");
const editP2Btn = document.getElementById("editP2");
const startNewGameBtn = document.getElementById("start-game");

const cancelConfig = document.getElementById("cancel-config");
const confirmConfig = document.getElementById("confirm-config");

editP1Btn.addEventListener("click", openPlayerConfig);
editP2Btn.addEventListener("click", openPlayerConfig);

cancelConfig.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

form.addEventListener("submit", savePlayerConfig);

startNewGameBtn.addEventListener("click", startNewGame);

gameFieldElements.addEventListener("click", selectGameField);
