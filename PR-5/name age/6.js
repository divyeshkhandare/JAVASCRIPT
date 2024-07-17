const result = () => {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

  let result=(typeof name + typeof age)
    
    document.getElementById("output").innerHTML = `NAME : ${name} , AGE : ${age}`;
    document.getElementById("output2").innerHTML = `${result}`
  };
  