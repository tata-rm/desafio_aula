async function handleSubmit(event) {
  event.preventDefault();

  const email    = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {email, password};

  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {"Content-Type":"application/json;charset=UTF-8"},
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if (result.success) {
    console.log(result.data)
    localStorage.setItem('userName', result.data[0].email)
    window.location.href = "../home/home.html";
  } else {
    alert(result.message);
  }
}