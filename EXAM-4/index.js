let users = [];

const handleData = (e) => {
  e.preventDefault();

  let user = {
    username: document.getElementById("UserName").value,
    grid: document.getElementById("grid").value,
    course: document.getElementById("course").value,
    fees: document.getElementById("fees").value,
    number: document.getElementById("number").value,
  };

  users.push(user);
  console.log(users);
};

document.getElementById("submit").addEventListener("submit", handleData);
