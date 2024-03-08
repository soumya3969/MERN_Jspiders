const readline = require("readline-sync");

let n = "nitin";
let rev = "";
for (let i = n.length - 1; i >= 0; i--) {
  rev += n.charAt(i);
}
if (n == rev) {
  console.log(`Its palindrome`);
} else {
  console.log(`Its not a palindrome`);
}

// ?User Input based Palindrome Check!!!!!!

function main() {
  let a = readline.question("Enter a String:- ");
  if (isPalindrome(a)) {
    console.log(`It's a Palindrome`);
  } else {
    console.log(`it's Not a palindrome`);
  }
}
function isPalindrome(n) {
  let s = n;
  let a = 0;
  let b = n.length - 1;
  while (a < b) {
    if (s.charAt(a) != s.charAt(b)) {
      return false;
    }
    a++;
    b--;
  }
  return true;
}
main();
