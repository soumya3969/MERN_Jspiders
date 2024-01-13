const readline = require("readline-sync");

function countDigit(n) {
  let count = 0;
  let num;
  while (n > 0) {
    n =Math.trunc( n / 10);
    count++;
  }
  console.log(count);
}
let num = +(readline.question("Enter a Number:-"));
countDigit(num);