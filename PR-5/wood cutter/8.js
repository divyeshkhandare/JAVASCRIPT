const result = () => {
  let type = document.getElementById("type").value;
  let result = document.getElementById("output");

  if (type % 3 == 0) {
    document.getElementById("output").innerHTML = `YES`;
  } else {
    document.getElementById("output").innerHTML = `NO`;
  }
};
