let arr = [5, 6, 8, 1, 2, -6, 1, 2];
// ? Searching in array
let res = arr.indexOf(1, 4); //! O/P:- 6
console.log(res); //*return index of the first matching element
res = arr.indexOf(5, 4); //! O/P:- -1
console.log(res); //*return -1 of element is not found inside the array

// !last index of
console.log("last index of:-");
let arr2 = [1, 2, 1, 3, 4, 1];
res = arr2.lastIndexOf(1);
console.log(res);
res = arr2.lastIndexOf(1, 3);
console.log(res);

// !include:-
res = arr2.includes(2);
console.log(res);
res = arr2.includes(5);
console.log(res);

// !find()

res = arr2.find((ele, index, arr) => {
  return ele > 2;
});
console.log(res);

// !reverse()

let arr3 = [1, 3, 4, 5, 8, 7];
let result = arr3.reverse();
console.log(result);
console.log(arr3);
console.log(result == arr3);
