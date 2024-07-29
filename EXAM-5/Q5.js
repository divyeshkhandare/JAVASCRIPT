//  Count Occurrences of an Element

let occur = [2, 2, 2, 1, 2, 2, 4, 5, 6];
let count = 0;

for (let i = 0; i < occur.length; i++) {
  if (occur[i] === 2) {
    count++;
  }
}

console.log(count);
