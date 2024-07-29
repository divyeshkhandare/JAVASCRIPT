//  Rotate Array

let rotate = [1, 2, 3, 4, 5];
let positions = 3;

let endSlice = rotate.slice(-positions % rotate.length);
let startSlice = rotate.slice(0, rotate.length - positions % rotate.length);

let rotatedArray = endSlice.concat(startSlice);

console.log(rotatedArray);

