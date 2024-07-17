const print = () => {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;
  let c = document.getElementById("num3").value;
  let d = document.getElementById("num4").value;

  document.getElementById("output1").innerHTML = `${a}`;
  document.getElementById("output2").innerHTML = `${b}`;
  document.getElementById("output3").innerHTML = `${c}`;
  document.getElementById("output4").innerHTML = `${d}`;
};
