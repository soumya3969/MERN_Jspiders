const readline = require("readline-sync");

let n1 = +readline.question("Enter starting Number:- ");
let n2 = +readline.question("Enter Ending Number:- ");
if (n1 > n2) {
  n1 = n1 + n2; // 15 5+10
  n2 = n1 - n2; // 5 15-10
  n1 = n1 - n2; // 10 15-5
}
for (let i = n1; i <= n2; i++) {
  if (isPrime(i)) {
    console.log(`${i}`);
  }
}

// *Function For Checking Prime:-
function isPrime(a) {
  if (a < 2) {
    return false;
  }
  for (let i = 2; i <= Math.trunc(a / 2); i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}
