const productNameInput = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInput.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingChars = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingChars;
  if (remainingChars === 0) {
    remainingCharsElement.className = ("error");
    productNameInput.className = ("error");
  } else if (remainingChars <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInput.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    productNameInput.classList.remove("error");
  } else if (remainingChars > 10) {
    remainingCharsElement.classList.remove("warning");
    productNameInput.classList.remove("warning");
    remainingCharsElement.classList.remove("error");
    productNameInput.classList.remove("error");
  }
}

productNameInput.addEventListener("input", updateRemainingCharacters);
