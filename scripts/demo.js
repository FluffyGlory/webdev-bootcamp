const productNameInput = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInput.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingChars = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingChars;
  if (remainingChars <= 10) {
    remainingCharsElement.classList.add("warning");
  }
  if (remainingChars > 10) {
    remainingCharsElement.classList.remove("warning");
  }
}

productNameInput.addEventListener("input", updateRemainingCharacters);
