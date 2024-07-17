// Check Vowel
let str = "red";

let vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    console.log(true);
  }
}
