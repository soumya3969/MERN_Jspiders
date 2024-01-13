const readline = require("readline-sync");
function isArmstrong(n) {
  let sum = 0;
  let temp = n;
  let digit = 0;
  while (temp > 0) {
    digit++;
    temp = Math.trunc(temp / 10);
  }
  temp = n;

  while (n > 0) {
    let rem = n % 10;
    sum += Math.pow(rem, digit);
    n = Math.trunc(n / 10);
  }
  if (sum === temp) {
    console.log(`${temp} is a Armstrong Number`);
  } else {
    console.log(`${temp} is not a Armstrong Number`);
  }
}
let num = +readline.question("Enter a Number:- ");
isArmstrong(num);
