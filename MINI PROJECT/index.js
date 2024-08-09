function toss(choice) {
  const isHeads = Math.random() < 0.5;
  let result;
  if (isHeads) {
    result = "heads";
  } else {
    result = "tails";
  }

  if (choice === result) {
    wins++;
    alert(`It is ${result}. You win!`);
  } else {
    losses++;
    alert(`It is ${result}. You lose.`);
  }

  let output = document.getElementById("won");
  let output2 = document.getElementById("lost");
  output.innerHTML = `Total Wins: ${wins}`;
  output2.innerHTML = `Total Losses: ${losses}`;
  localStorage.setItem("wins", wins);
  localStorage.setItem("losses", losses);
  updateDisplay();
}

function updateDisplay() {
  const output = document.getElementById("won");
  output.innerHTML = `Total Wins: ${wins}`;
  const output2 = document.getElementById("lost");
  output2.innerHTML = `Total Losses: ${losses}`;
}

function reset() {
  localStorage.clear();
  wins = 0;
  losses = 0;
  updateDisplay();
}

let wins = Number(localStorage.getItem("wins"));
let losses = Number(localStorage.getItem("losses"));

updateDisplay();
