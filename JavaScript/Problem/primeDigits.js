const readline = require("readline-sync");
function primeDigits(n) {
  while (n > 0) {
    let rem = n % 10;
    let count = 0;
    if (rem < 2) {
        count++;
      }
    for (let i = 2; i <= Math.trunc(rem / 2); i++) {
      if (rem % i === 0) {
        count++;
      }
    }
    if (count === 0) {
      console.log(rem);
    }
    n = Math.trunc(n / 10);
  }
}
let num = +readline.question("Enter a Number:- ");
primeDigits(num);
