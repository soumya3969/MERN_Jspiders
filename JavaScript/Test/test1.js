// *LARGEST PRIME NUMBER

const readline = require("readline-sync");
let a = +readline.question("Enter starting Number:- ");
let b = +readline.question("Enter ending Number:- ");

for (let i = b; i >=a; i--) {
  if (isPrime(i)) {
    console.log(`${i} is the largest Prime Number.`);
    break;
  }
}
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.trunc(n / 2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
