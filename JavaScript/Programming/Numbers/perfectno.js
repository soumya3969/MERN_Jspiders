const readline = require("readline-sync");
let a = +readline.question("Enter a number:- ");
if (isPerfect(a)) {
    console.log(`${a} is a perfect number`)
} else {
    console.log(`${a} is not a perfect number`)
    
}

function isPerfect(num) {
  let temp = num;
  let sum = 0;
  for (let i = 1; i < temp; i++) {
    if (temp % i == 0) {
      sum = sum + i;
    }
  }
  if (sum == num) {
    return true;
  } else {
    return false;
  }
}
