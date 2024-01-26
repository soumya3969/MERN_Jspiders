const readline = require("readline-sync");
let a = +readline.question("Enter a Number:- ");
isStrong(a);
function isStrong(n) {
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    let fact = 1;
    let rem = temp % 10;
    for (let i = rem; i > 0; i--) {
      fact *= i;
    }
    sum += fact;
    temp = Math.trunc(temp / 10);
  }
  if (sum == n) {
    console.log(`${n} is a Strong number.`);
  } else {
    console.log(`${n} is not a Strong number.`);
  }
}
