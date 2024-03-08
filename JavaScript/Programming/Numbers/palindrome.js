const readline = require("readline-sync");
let a = +readline.question("Enter a Number :- ");
if (isPalindrome(a)) {
  console.log(`${a} is a palindrome`);
} else {
  console.log(`${a} is not a palindrome`);
}

function isPalindrome(num) {
  let temp = num;
  let rev = 0;

  while (temp > 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.trunc(temp / 10);
  }
  if (rev == num) {
    return true;
  } else {
    return false;
  }
}
