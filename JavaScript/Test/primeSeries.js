const readline = require("readline-sync");
let a = +readline.question("Enter starting Number:- ");
let b = +readline.question("Enter ending Number:- ");

for (let i = a; i <= b; i++) {
  if (isPrime(i)) {
    console.log(`${i} is a Prime Number.`);
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
