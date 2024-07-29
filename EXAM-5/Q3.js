// FIND THE SMALLEST OF ARRAY

let small = [2, 5, 1, 6, 3, 5, 88];
let result = small[0];

for (let i = 1; i < small.length; i++) {
  if (small[i] < result) {
    result = small[i];
  }
}

console.log(result);
