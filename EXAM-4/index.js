let users = [];

const handleDelete = (index) => {
  users.splice(index, 1);
  content();
  content2();
  
};

const content = () => {
  document.getElementById("tbody").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = users[i].username;
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].grid;
    let td3 = document.createElement("td");
    if (users[i].course === users[i].fullstack) {
      td3.innerHTML = users[i].fullstack;
    } else if (users[i].course === users[i].backend) {
      td3.innerHTML = users[i].backend;
    } else if (users[i].course === users[i].frontend) {
      td3.innerHTML = users[i].frontend;
    } else if (users[i].course === users[i].uiux) {
      td3.innerHTML = users[i].uiux;
    }
    let td4 = document.createElement("td");
    if (users[i].fees === users[i].fees1) {
      td4.innerHTML = users[i].fees1;
    } else if (users[i].fees === users[i].fees2) {
      td4.innerHTML = users[i].fees2;
    } else if (users[i].fees === users[i].fees3) {
      td4.innerHTML = users[i].fees3;
    } else if (users[i].fees === users[i].fees4) {
      td4.innerHTML = users[i].fees4;
    }
    let td5 = document.createElement("td");
    td5.innerHTML = users[i].number;
    let td6 = document.createElement("td");
    td6.innerHTML = "Remove";
    td6.addEventListener("click", handleDelete);
    document.getElementById("tbody").append(tr);
    tr.append(td1, td2, td3, td4, td5, td6);
  }
};

const content2 = () => {

  let deptcount = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].course === users[i].fullstack) {
      deptcount++;
    }
    let deptcount1 = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].course === users[i].frontend) {
        deptcount1++;
      }
      let deptcount2 = 0;
      for (let i = 0; i < users.length; i++) {
        if (users[i].course === users[i].backend) {
          deptcount2++;
        }
        let deptcount3 = 0;
        for (let i = 0; i < users.length; i++) {
          if (users[i].course === users[i].uiux) {
            deptcount3++;
          }

          document.getElementById("tbody2").innerHTML = "";
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          td1.innerHTML = users[i].fullstack;
          let td2 = document.createElement("td");
          td2.innerHTML = deptcount;
          td3 = document.createElement("td");
          td3.innerHTML = "";
          let tr2 = document.createElement("tr");
          let td4 = document.createElement("td");
          td4.innerHTML = users[i].frontend;
          let td5 = document.createElement("td");
          td5.innerHTML = deptcount1;
          let td6 = document.createElement("td");
          td6.innerHTML = "";
          let tr3 = document.createElement("tr");
          let td7 = document.createElement("td");
          td7.innerHTML = users[i].backend;
          let td8 = document.createElement("td");
          td8.innerHTML = deptcount2;
          let td9 = document.createElement("td");
          td9.innerHTML = "";
          let tr4 = document.createElement("tr");
          let td10 = document.createElement("td");
          td10.innerHTML = users[i].uiux;
          let td11 = document.createElement("td");
          td11.innerHTML = deptcount3;
          let td12 = document.createElement("td");
          td12.innerHTML = "";
          document.getElementById("tbody2").append(tr, tr2, tr3, tr4);
          tr.append(td1, td2, td3);
          tr2.append(td4, td5, td6);
          tr3.append(td7, td8, td9);
          tr4.append(td10, td11, td12);
        }
      }
    }
  }
};

const handleData = (e) => {
  e.preventDefault();

  let user = {
    username: document.getElementById("UserName").value,
    grid: document.getElementById("grid").value,
    course: document.getElementById("course").value,
    fullstack: document.getElementById("fullstack").value,
    backend: document.getElementById("backend").value,
    frontend: document.getElementById("frontend").value,
    uiux: document.getElementById("uiux").value,
    fees: document.getElementById("fees").value,
    fees1: document.getElementById("fees1").value,
    fees2: document.getElementById("fees2").value,
    fees3: document.getElementById("fees3").value,
    fees4: document.getElementById("fees4").value,
    number: document.getElementById("number").value,
  };
  if (user.username.length < 2) {
    alert("Username should be at least 2 characters long");
    return;
  }
  if (user.grid.length != 4) {
    alert("GRID should be 4 characters long");
    return;
  }
  if (
    user.number.length != 10 ) {
    alert(
      "Phone number should be at least 10 Numbers"
    );
    return;
  }
  if (!["6","7","8","9"].includes(user.number[0])){
    alert(
      "Phone number should start with 6, 7, 8, or 9"
    );
    return;
  }

  users.push(user);
  console.log(users);
  content();
  content2();
};

document.getElementById("UserData").addEventListener("submit", handleData);
