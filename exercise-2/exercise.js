// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
const button1 = document.querySelector("section button");
const button2 = document.getElementById("add-blue-bkgd");
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

// function removeParagraph() {
//   console.dir(button1);
// }

// function changeBkgdColor(event) {
//   console.dir(event.target);
// }
// button1.addEventListener("click", removeParagraph);

// button2.addEventListener("click", changeBkgdColor);
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const paragraph1 = document.body.children[2].children[1];
console.log(paragraph1);
const paragraph3 = paragraph1.nextElementSibling.nextElementSibling;
console.log(paragraph3);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function removeParagraph() {
  paragraph3.remove();
}

function changeBkgdColor(event) {
    paragraph1.classList.add('blue-bg');
}
button1.addEventListener("click", removeParagraph);

button2.addEventListener("click", changeBkgdColor);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
