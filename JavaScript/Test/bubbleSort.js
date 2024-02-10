let arr_1 = [-5, 2, 7, 8, -2, 10];
console.log(arr_1)
for (let i = 0; i < arr_1.length - 1; i++) {
  for (let j = 0; j < arr_1.length - 1; j++) {
    if (arr_1[j] > arr_1[j + 1]) {
      arr_1[j] = arr_1[j] + arr_1[j + 1];
      arr_1[j + 1] = arr_1[j] - arr_1[j + 1];
      arr_1[j] = arr_1[j] - arr_1[j + 1];
    }
  }
}

console.log(arr_1)