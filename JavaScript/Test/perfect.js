const readline = require("readline-sync");
let a = +readline.question("Enter a number:- ");
isPerfect(a);

function isPerfect(n) {
  let sum = 0;
  let temp = n;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
      console.log(i);
    }
  }
  if (sum===n) {
    console.log(`${n} is a strong Number`);
} else {
      console.log(`${n} is not a strong Number`);
    
  }
}
