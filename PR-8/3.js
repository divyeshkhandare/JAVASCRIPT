// Check Vowel
let str = "red";

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let output = false;

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    output =  true;
  } 
}

console.log(output); // true