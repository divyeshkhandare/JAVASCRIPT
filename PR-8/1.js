// ARRAY TO LOWERCASE at alternative postion

let array = ["RED", "AND", "WHITE"];
for (let i = 0; i < array.length; i++) {
  if (array[i] == "AND") {
    console.log(array[i].toLowerCase());
  } else {
    console.log(array[i]);
  }
}
