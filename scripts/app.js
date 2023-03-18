let paragraphElement = document.querySelector('p');
function changeParagraphText(event) {
    paragraphElement.textContent = 'Clicked!'
    console.log('paragraph clicked!')
    console.log(event)
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    let enteredText = event.target.value;
    console.log(enteredText)
    console.log(event)
}

inputElement.addEventListener('input', retrieveUserInput);
