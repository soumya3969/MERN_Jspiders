let arr = [10, 20, 30, 40, 50, 60];
let key = 50;
let flag = 0;
for (let i = 0; i < arr.length; i++) {
  if (key == arr[i]) {
    flag++;
    console.log("Element Not Found at index " + i);
    break;
  }
}
if ((flag == 0)) {
  console.log("Element Not Found");
}
