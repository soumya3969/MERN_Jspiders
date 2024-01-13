const readline = require("readline-sync");
function fibonacci() {
  let n = +readline.question("Enter Series Length:- ");
  let a = 0;
  let b = 1;
  for (let i = 0; i <= n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
  }
}
fibonacci();

