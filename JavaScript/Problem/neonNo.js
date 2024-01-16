const readline = require("readline-sync");
function isNeon(n) {
  let power = Math.pow(n, 2);
  let sum = 0;
  while (power > 0) {
    let rem = power % 10;
    sum += rem;
    power = Math.trunc(power / 10);
  }
  if (sum === n) {
    console.log("true");
  } else {
    console.log("false");
  }
}
let num = +readline.question("Enter a Number:- ");
isNeon(num);
