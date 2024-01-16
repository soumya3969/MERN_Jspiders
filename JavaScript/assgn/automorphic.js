const readline = require("readline-sync");
function automorphic(n) {
  let sq = Math.pow(n, 2);
  let num = n;
  let temp = 1;
  while (n > 0) {
    temp *= 10;
    n = Math.trunc(n / 10);
  }
  if (sq % temp === num) {
      console.log(`${num} is automorphic`);
    }else{
        console.log(`${num} is not an automorphic`);

  }
}
let num = +readline.question("Enter a Number:- ");
automorphic(num);
