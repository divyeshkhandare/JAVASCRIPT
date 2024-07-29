// Find Missing Number

let arr = [1, 2, 3, 4, 6];
let n = arr.length + 1;
let sum = (n * (n + 1)) / 2;
let sumarr = 0;

for (let i = 0; i < arr.length; i++) {
  sumarr += arr[i];
}

console.log(sum - sumarr);
