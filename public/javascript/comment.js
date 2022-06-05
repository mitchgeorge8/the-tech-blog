async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector("#inputComment").value.trim();

  const post_id = window.location
    .toString()
    .split("/")
    [window.location.toString().split("/").length - 1].split("?")[0];

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "post",
      body: JSON.stringify({
        comment_text,
        post_id,
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
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
