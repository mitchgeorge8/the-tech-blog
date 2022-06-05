async function newPostFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#inputTitle").value;
  const post_content = document.querySelector("#inputContent").value;

  const response = await fetch("/api/posts", {
    method: "post",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPostFormHandler);
