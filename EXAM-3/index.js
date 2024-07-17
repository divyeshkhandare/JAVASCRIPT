let users = [];

const handleDelete = (index) => {
  users.splice(index, 1);
  content();
};

const handleDeleteAll = (index) => {
  users.splice(index);
  content();
};

const content = () => {
  document.getElementById("tbody").innerHTML = "";
  document.getElementById("tbody").innerHTML = "";
  let total = users.length;
  document.getElementById("totalemp").innerHTML = `TOTAL EMPLOYEES =  ${total}`;
  let totalsalary = 0;
  for (let i = 0; i < users.length; i++) {
    totalsalary += Number(users[i].salary);
  }

  document.getElementById(
    "totalsal"
  ).innerHTML = `TOTAL SALARY = ${totalsalary}`;
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let td0 = document.createElement("td");
    td0.innerHTML = i + 1;
    let td1 = document.createElement("td");
    td1.innerHTML = users[i].name;
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].email;
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].department;
    let td4 = document.createElement("td");
    td4.innerHTML = users[i].experiance;
    let td5 = document.createElement("td");
    if (users[i].experiance.length > 0) {
      if (users[i].experiance <= 5) {
        td5.innerHTML = "Junior";
      } else {
        td5.innerHTML = "Senior";
      }
    }
    let td6 = document.createElement("td");
    td6.innerHTML = users[i].salary;
    // remove the user
    let td7 = document.createElement("td");
    td7.innerHTML = "remove";
    td7.addEventListener("click", () => handleDelete(i));
    tr.append(td0, td1, td2, td3, td4, td5, td6, td7);
    document.getElementById("tbody").append(tr);
    // Delete all the users
    document
      .getElementById("delete")
      .addEventListener("click", () => handleDeleteAll(i));
  }
};

const handleData = (e) => {
  e.preventDefault();
  let name = document.getElementById("employename").value;
  let email = document.getElementById("email").value;
  let department = document.getElementById("department").value;
  let experiance = document.getElementById("experiance").value;
  let salary = document.getElementById("salary").value;

  let user = {
    name: name,
    email: email,
    department: department,
    experiance: experiance,
    salary: salary,
  };

  users.push(user);
  console.log(users);
  content();
  data();
};

document.getElementById("UserData").addEventListener("submit", handleData);
