const readline = require("readline-sync");
function sumDigit(n) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += rem;
    n = Math.trunc(n / 10);
  }
  console.log(sum);
}
let num = +(readline.question("Enter a Number:- "));
sumDigit(num);
