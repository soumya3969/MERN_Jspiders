let arr = [9, 5, 3, 1, 14, 21];
console.log(arr);
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      arr[j] = arr[j] + arr[j + 1];
      arr[j + 1] = arr[j] - arr[j + 1];
      arr[j] = arr[j] - arr[j + 1];
    }
  }
}
console.log(arr);
