const readline = require("readline-sync");
let a = +readline.question("Enter a Number:-");
if (isPalindrome(a)) {
  console.log(`${a} is a Palindrome Number. `);
} else {
  console.log(`${a} is not a Palindrome Number. `);
}
function isPalindrome(n) {
  let temp = n;
  let rev = 0;
  while (temp > 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.trunc(temp / 10);
  }

  if (rev === n) {
    return true;
  } else {
    return false;
  }
}
