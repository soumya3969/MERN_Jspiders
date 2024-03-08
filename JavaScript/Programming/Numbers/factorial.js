const readline = require("readline-sync");
let a = readline.question("Enter a Number:- ");
factorial(a);

function factorial(num) {
  let temp = num;
  let fact = 1;
  for (let i = temp; i > 1; i--) {
    fact *= i;
  }
  console.log(fact);
}
