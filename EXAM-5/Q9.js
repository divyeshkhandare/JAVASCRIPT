// Check if Array is Sorted

let arr = [1, 2, 3, 4, 5];
let sort = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    sort = false
  }
}

console.log(sort);
