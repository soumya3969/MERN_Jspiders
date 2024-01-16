const readline = require("readline-sync");

function test2(n) {
  //   let rem = num % 10;
  for (let i = n; i >= 1; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

let num = +readline.question("Enter a Number:- ");
test2(num);
