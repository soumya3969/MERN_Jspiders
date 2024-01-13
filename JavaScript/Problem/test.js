const readline = require("readline-sync");
function test(n) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    let product = Math.pow(rem,2);
    console.log(`${rem} * ${rem} = ${product}`);
    sum += product;
    n = Math.trunc(n / 10);
  }
  console.log("----------\n"+sum);
}
let num = +readline.question("Enter a Number:- ");
test(num);
