const readline = require('readline-sync');


let arr1 = [7, 9, 2, 5, 13, -5];
console.log(arr1);
insertionSort(arr1)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = key;
      }
      console.log(arr);
      
}
let arr2=[];
let size=+readline.question('Enter the array Size:- ')
for(let i=0;i<size;i++){
    arr2.push(+readline.question(`Enter the number for ${i} position:- `))
}
console.log(arr2)
insertionSort(arr2)