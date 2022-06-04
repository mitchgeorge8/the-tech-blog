async function logInFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#inputEmail").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/log-in", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".log-in-form")
  .addEventListener("submit", logInFormHandler);
