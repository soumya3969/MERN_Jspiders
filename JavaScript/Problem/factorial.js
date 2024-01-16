const readline = require("readline-sync");
function factorial(n) {
  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}
let num = +readline.question("Enter a Number:- ");
console.log(factorial(num));
