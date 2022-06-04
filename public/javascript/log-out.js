async function logOut() {
  const response = await fetch("/api/users/log-out", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#log-out").addEventListener("click", logOut);
