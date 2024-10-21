let arr = [10, 20, 30, 40, 50];
let start = 0;
let end = arr.length - 1;
let key = 45;
let flag=0;
while (start <= end) {
  let mid = Math.trunc((start + end) / 2);
  if (key == arr[mid]) {
    console.log("Element is Found at Index " + mid);
    break;
  } else if (key > arr[mid]) {
    start = mid + 1;
  } else if (key < arr[mid]) {
    end = mid - 1;
  }
  flag++;
}
if (flag!==0) {
    console.log()
}