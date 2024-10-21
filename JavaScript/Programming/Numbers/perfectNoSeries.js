const readline = require("readline-sync");
let a = +readline.question("Enter starting number:- ");
let b = +readline.question("Enter ending number:- ");
if(a>b){
    a=a+b;
    b=a-b;
    a=a-b;
}
for(let i=a;i<=b;i++){
 if (isPerfect(i)) {
    console.log(`${i} is a perfect Number`)
 }
}

function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum = sum + i;
    }
  }
  if (sum == n) {
    return true;
  } else {
    return false;
  }
}
