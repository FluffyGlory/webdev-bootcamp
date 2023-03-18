// Sum numbers

const findSumButton = document.querySelector("#calculator button");

function findSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }
  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

findSumButton.addEventListener("click", findSum);

// highlight links

const highlightLinksButton = document.querySelector("#highlight-links button");

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButton.addEventListener("click", highlightLinks);

// Display user data

const dummyUserData = {
  firstName: "Leif",
  lastName: "MacCarthy",
  age: 15,
};
const displayUserDataButton = document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";
  for (const key in dummyUserData) {
    const newUserDataItem = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataItem.textContent = outputText;
    outputDataElement.append(newUserDataItem);
  }
}
displayUserDataButton.addEventListener("click", displayUserData);

// Statistics

const rollDiceButton = document.querySelector("#statistics button");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function getNumberOfDiceRolls() {
  const targetNumberInput = document.getElementById("user-target-number");
  const diceRollsList = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInput.value;
  diceRollsList.innerHTML = "";

  let hasRolledTarget = false;
  let numberOfRolls = 0;

  while (!hasRolledTarget) {
    const rolledNumber = rollDice();
    numberOfRolls++;
    const newRollListElement = document.createElement('li')
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListElement.textContent = outputText;
    diceRollsList.append(newRollListElement)
    hasRolledTarget = rolledNumber == enteredNumber;
  }
  const outputTotalRolls = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRolls.textContent = numberOfRolls;
}

rollDiceButton.addEventListener("click", getNumberOfDiceRolls);
