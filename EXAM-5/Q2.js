// FIND LARGET NUMBER OF ARRAY

let large = [2, 6, 12, 16, 20, 24];
let result = 0;
for (let i = 0; i < large.length; i++) {
    if (large[i] > result) {
        result = large[i];
    }
}

console.log(result);