const readline = require("readline-sync");
function isPrime(m, n) {
  for (let i = n; i > m; i--) {
        let flag = 0;
        if (i < 2) {
         flag++;
        }
        for (let j = 2; j <= Math.trunc(i / 2); j++) {
            if (i % j === 0) {
                flag++;
                break;
            }
        }
        if (flag === 0) {
            console.log(i);
            return;
        }
  }
}
let n1 = +readline.question("Enter starting number:- ");
let n2 = +readline.question("Enter Ending number:- ");
isPrime(n1, n2);
