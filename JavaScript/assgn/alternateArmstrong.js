const readline = require("readline-sync");
function isArmstrong(m, n) {
  let count = 1;
  for (let i = m; i <= n; i++) {
    let sum = 0;
    let temp = i;
    let digit = 0;
    while (temp > 0) {
      digit++;
      temp = Math.trunc(temp / 10);
    }
    temp = i;

    while (temp > 0) {
      let rem = temp % 10;
      sum += Math.pow(rem, digit);
      temp = Math.trunc(temp / 10);
    }
    if (sum === i) {
      if (count % 2 !== 0) {
        console.log(`${i} is a Armstrong Number`);
      }
      count++;
    }
  }
}
let num1 = +readline.question("Enter starting Number:- ");
let num2 = +readline.question("Enter ending Number:- ");
isArmstrong(num1, num2);
