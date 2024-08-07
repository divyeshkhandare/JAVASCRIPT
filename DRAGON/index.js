let users = [];

const content = () => {
  document.getElementById("tbody").innerHTML = ""
}

let handleData = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let number = document.getElementById("number").value;
  let user = {
    name: name,
    price: price,
    number: number,
  };
  users.push(user);
  console.log(users)
  content();
};

document.getElementById("Data").addEventListener("submit", handleData);