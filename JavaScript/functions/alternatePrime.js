const readline = require("readline-sync");
let n1 = +readline.question("Enter star Number :- ");
let n2 = +readline.question("Enter end Number :- ");
let count = 1;
if (n1 > n2) {
  n1 = n1 + n2; // 15 5+10
  n2 = n1 - n2; // 5 15-10
  n1 = n1 - n2; // 10 15-5
}
for (let i = n1; i <= n2; i++) {
  if (isPrime(i)) {
    if (count % 2 !== 0) {
      console.log(`${i}`);
    }
  }
  count++;
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
