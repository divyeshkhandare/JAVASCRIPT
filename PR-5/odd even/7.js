const result = () => {
  let type = document.getElementById("type").value;
  let result = document.getElementById("output");

  if (type % 2 == 0) {
    document.getElementById("output").innerHTML = `EVEN NUMBER`;
  } else {
    document.getElementById("output").innerHTML = `ODD NUMBER`;
  }
};
