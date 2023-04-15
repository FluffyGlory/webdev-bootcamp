const deleteBtnElements = document.querySelectorAll(".product-item button");

async function deleteProduct(event) {
  const buttonElement = event.target;
  const productId = buttonElement.dataset.productid;
  const csrfToken = buttonElement.dataset.csrf;

  const response = await fetch(
    "/admin/products/" + productId + "?_csrf=" + csrfToken,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    return alert("Something went wrong!");
  }
  buttonElement.parentElement.parentElement.parentElement.parentElement.remove();
  // This takes you to the li
}

for (const deleteBtnElement of deleteBtnElements) {
  deleteBtnElement.addEventListener("click", deleteProduct);
}
