// document.body.children[1].children[0].href = 'google.com';
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://apple.com";
anchorElement.href = "https://google.com";
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.text = "Let me search!";
let firstParagraph = document.querySelector("p");
firstParagraph.append(newAnchorElement);
// Remove the h1 element
let firstH1Element = document.querySelector("h1");
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); -- for older browsers

// Move Elements

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

firstParagraph.innerHTML =
  "<strong>Why yes, I do agree.</strong> That is rather unfortunate.";
