const readline = require("readline-sync");
let arr1 = [1, 7, 4, 3, 9, 6];
let key = 9;
linearSearch(arr1, key);



function linearSearch(arr, key) {
  let count=0;
  for (let index = 0; index < arr.length; index++) {
    if (key === arr[index]) {
      count++;
      console.log("Element is Found at index " + index, arr[index]);
      break;
    }
  }
  if (count === 0) {
    console.log("Element is not Found");
  }
}

let arr2 = [];
let size = +readline.question("Enter the array Size:- ");

for (let i = 0; i < size; i++) {
    arr2.push(+readline.question(`Enter the number for ${i} position:- `));
}

key = +readline.question("Enter the value want to search:- ");
console.log(arr2);
linearSearch(arr2, key);
