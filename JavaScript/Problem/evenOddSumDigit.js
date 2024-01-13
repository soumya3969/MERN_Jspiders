const readline = require("readline-sync");
function evenOddSumDigit(n) {
  let even = 0;
  let odd = 0;
  while (n > 0) {
    let rem = n % 10;
    if (rem % 2 === 0) {
      even += rem;
    } else {
      odd += rem;
    }
    n = Math.trunc(n / 10);
  }
  console.log(`Sum of Even number is ${even}`);
  console.log(`Sum of odd number is ${odd}`);
}
let num = +readline.question("Enter a Number:- ");
evenOddSumDigit(num);
