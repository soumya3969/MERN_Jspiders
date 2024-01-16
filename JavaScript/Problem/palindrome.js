const readline = require("readline-sync");
function isPalindrome(n) {
  let rev = 0;
  let temp = n;
  while (n > 0) {
    let rem = n % 10;
    rev=(rev*10)+rem;
    n=Math.trunc(n/10);
  }
  if (temp===rev) {
    console.log(`${temp} is a Palindrome`);
} else {
      console.log(`${temp} is a not Palindrome`);
  }
}
let num=+(readline.question('Enter A Number:- '));
isPalindrome(num);

