const readline = require('readline-sync');
let arr = [1, 8, 0, 3, 12, -9];
console.log(`Original Array = [${arr}]`);
// *
for (let i = 0; i < arr.length; i++) {
  let index = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[index] > arr[j]) {
      index = j;
    }
  }
  if (i !== index) {
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
}
console.log(`Sorted Array = [${arr}]`);
// console.log(arr);
// let arr1=[];
// let size=
