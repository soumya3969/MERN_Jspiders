const readline = require("readline-sync");
let a = +readline.question("Enter a number:- ");
if (isPrime(a)) {
  console.log(`${a} is a prime number`);
} else {
  console.log(`${a} is not a prime number`);
}
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.trunc(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
