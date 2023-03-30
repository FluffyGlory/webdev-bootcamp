const loadCommentsBtn = document.getElementById("load-comments");
const commentSection = document.getElementById("comments");
const commentsForm = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function createCommentsList(comments) {
  const commentList = document.createElement("ol");
  for (const comment of comments) {
    const commentElement = document.createElement("li");
    commentElement.innerHTML = `
    <article class="comment-item">
    <h2>${comment.title}</h2>
    <p>${comment.text}</p>
    </article>`;
    commentList.appendChild(commentElement);
  }
  return commentList;
}

async function fetchCommentsForPost(event) {
  const postId = loadCommentsBtn.dataset.postid;
  const response = await fetch(`/posts/${postId}/comments`);
  const responseData = await response.json();

  const commentsListElement = createCommentsList(responseData);
  console.log(commentsListElement);
  commentSection.innerHTML = "";
  commentSection.appendChild(commentsListElement);
}

function saveComment(event) {
  event.preventDefault();
  const postId = commentsForm.dataset.postid;

  const enteredTitle = commentTitleElement.value;
  const enteredText = commentTextElement.value;

  const comment = { title: enteredTitle, text: enteredText };

  fetch(`/posts/${postId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
  });
}

loadCommentsBtn.addEventListener("click", fetchCommentsForPost);
commentsForm.addEventListener("submit", saveComment);
