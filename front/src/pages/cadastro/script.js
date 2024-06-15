async function handleRegister(event) {
  event.preventDefault();

  const name     = document.getElementById("name").value;
  const email    = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {name,email,password};

  const response = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(data)
  })

  const result = await response.json();
  
  if (result.success) {
    window.location.href = "../login/login.html";
  } else {
    alert(result.message)
  }
}