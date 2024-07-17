// count vowel

let count = "red and whihte";

let vowels = ["a", "e", "i", "o", "u"];

let vowelcount = 0;

for (let i = 0; i < count.length; i++) {
  if (vowels.includes(count[i])) {
    vowelcount++;
  }
}

console.log(vowelcount);
