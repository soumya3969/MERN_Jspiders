const readline = require("readline-sync");
let a = readline.question("Enter starting Number :- ");
let b = readline.question("Enter ending Number :- ");
if (a > b) {
  a = a + b;
  b = a - b;
  a = a - b;
}

for (let i = a; i <= b; i++) {
  if (isPrime(i)) {
    console.log(`${i} is a prime number `);
  } else {
    console.log(`${i} is not a prime number `);
    factors(i);
  }
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.trunc(n / 2); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function factors(a) {
  console.log("factors of " + a + " are :");
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      console.log(i);
    }
  }
}
