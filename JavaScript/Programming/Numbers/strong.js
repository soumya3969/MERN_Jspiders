const readline = require("readline-sync");
let a = +readline.question("Enter a Number:- ");
if (isStrong(a)) {
  console.log(`${a} is a strong number`);
} else {
  console.log(`${a} is not a strong number`);
}
function isStrong(num) {
  let temp = num;
  let sum = 0;
  while (temp > 0) {
    let product = 1;
    let rem = temp % 10;
    for (let i = rem; i > 1; i--) {
      product *= i;
    //   console.log(product)
    }
    sum += product;
    temp = Math.trunc(temp / 10);
  }
  if (sum == num) {
    return true;
  } else {
    return false;
  }
}
