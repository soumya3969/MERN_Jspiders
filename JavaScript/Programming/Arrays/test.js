let arr = [10, 20, 30, 40, 50];
let brr = [];
let k = 0;
// brr=arr.reverse()
for (let i = arr.length - 1; i >= 0; i--) {
  //   brr.push(arr[i]);
  brr[k++] = arr[i];
}
console.log(brr);
