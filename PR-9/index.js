const handledata = (e) => {
  e.preventDefault();

  let user = {
    username: document.getElementById("UserName").value,
    email: document.getElementById("useremail").value,
    number: document.getElementById("number").value,
    password: document.getElementById("password").value,
  };

  if (user.username.length < 2) {
    alert("username must be at least 2 characters");
    return;
  }
  if (user.number.length != 10) {
    alert("number must be at least 10 characters");
    return;
  }

  if (user.password.length < 6) {
    alert("password must be at least 6 characters");
    return;
  }
  console.log(user);
};

document.getElementById("UserData").addEventListener("submit", handledata);
