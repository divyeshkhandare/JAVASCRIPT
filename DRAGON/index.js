let users = [];

const handleData = (e) => {
  e.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    number: document.getElementById("number").value,
  };
  if (user.name.length < 2) {
    alert("Username should be at least 2 characters long");
    return;
  }
  if (user.price <= 0) {
    alert("Price cannot be 0 or negative");
    return;
  }
  let Phone = /^(0|91)?[6-9][0-9]{9}$/;
  if (!Phone.test(user.number)) {
    alert("Please enter a valid phone number");
    return;
  }

  users.push(user);
  console.log(users);
  content();
};

const handleDelete = (index) => {
  users.splice(index, 1);
  content();
};

const content = () => {
  document.getElementById("div-2").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.innerHTML = "Name:";
    let td1 = document.createElement("td");
    td1.innerHTML = users[i].name;
    let tr2 = document.createElement("tr");
    let th2 = document.createElement("th");
    th2.innerHTML = "Price:";
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].price;
    let tr3 = document.createElement("tr");
    let th3 = document.createElement("th");
    th3.innerHTML = "Number:";
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].number;
    let tbody2 = document.createElement("tbody");
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener("click", () => handleDelete(i));
    tr.append(th1, td1);
    tr2.append(th2, td2);
    tr3.append(th3, td3);
    tbody.append(tr, tr2, tr3);
    tbody2.append(btn);
    table.append(tbody, tbody2);
    document.getElementById("div-2").append(table);
  }
};

document.getElementById("Data").addEventListener("submit", handleData);
