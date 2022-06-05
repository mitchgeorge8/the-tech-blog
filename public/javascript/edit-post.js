async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#inputTitle").value;
  const post_content = document.querySelector("#inputContent").value;

  const id = window.location
    .toString()
    .split("/")
    [window.location.toString().split("/").length - 1].split("?")[0];

  const response = await fetch(`/api/posts/${id}`, {
    method: "put",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
