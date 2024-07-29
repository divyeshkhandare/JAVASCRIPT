// REMOVE DUPLICATE

let dupli = [2, 2, 2, 1, 1, 3, 4, 5, 6];

for (let i = 0; i < dupli.length; i++) {
  for (let j = i + 1; j < dupli.length; j++) {
    if (dupli[i] === dupli[j]) {
      dupli.splice(j, 1);
      j--;
    }
  }
}

console.log(dupli);
