const readline = require("readline-sync");
let a = readline.question("Enter A Number :-");
if (isPrime(a)) {
  console.log(`${a} is a Prime Number`);
} else {
  console.log(`${a} is not a Prime Number`);
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
