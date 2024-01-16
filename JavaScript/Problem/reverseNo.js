const readline = require("readline-sync");

function reverseNo(n) {
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = (rev * 10) + rem;
    n = Math.trunc(n / 10);
  }
  console.log(rev);
}
let num = +readline.question("Enter a Number:- ");
reverseNo(num);
