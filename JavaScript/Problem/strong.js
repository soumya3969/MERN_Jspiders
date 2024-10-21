const readline = require("readline-sync");
let num = +readline.question("Enter a Number:- ");
isStrong(num);
function isStrong(n) {
  let sum = 0;
  let temp = n;
  while (n > 0) {
    rem = n % 10; //? picking out single Digits...
    let fact = 1;
    for (let i = rem; i >= 1; i--) {
      fact *= i;  //? Calculate the Factorial of each Digits
    } 
    sum += fact; //?adding each Factorials.
    n = Math.trunc(n / 10);
  }
  if (sum === temp) {
    console.log(`${temp} is An strong Number`);
  } else {
    console.log(`${temp} is not An strong Number`);
  }
}

