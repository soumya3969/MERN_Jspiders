const readline = require("readline-sync");

function isPalindrome(m, n) {
  for (let i = m; i <= n; i++) {
    let rev = 0;
    let temp = i;
    while (temp > 0) {
      //   let rem = temp % 10;
      rev = (rev * 10) + (temp % 10);
      temp = Math.trunc(temp / 10);
    }
    if (i === rev) {
      console.log(`${i} is a Palindrome`);
    }
  }
}
let num1 = +readline.question("Enter starting Number:- ");
let num2 = +readline.question("Enter ending Number:- ");
isPalindrome(num1, num2);
