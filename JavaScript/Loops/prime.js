const readline = require("readline-sync");
// function isPrime(n) {
//   // let count=0;
//   if (n < 2) {
//     // console.log(`${n} is Not a Prime Number`);
//     return 0;
//   }
//   for (let i = 2; i <= Math.trunc(n / 2); i++) {
//     if (n % i === 0) {
//       return 0;
//     }
//   }
//   return 1;
// }
// let n = +readline.question("Enter Number :- ");
// let res = isPrime(n);
// if (res === 0) {
//   console.log(`${n} is Not a Prime Number`);
// } else {
//   console.log(`${n} is a Prime Number`);
// }

// W/O Function
function Prime() {
  let m = +readline.question("Enter Number :- ");
  if (m < 2) {
    console.log(`${m} is not a Prime Number`);
    return;
  }
  for (let i = 2; i <= Math.trunc(m / 2); i++) {
    if (m % i === 0) {
      console.log(`${m} not a Prime Number;`);
      return;
    }
  }
  console.log("its a prime Number");
}
Prime();
