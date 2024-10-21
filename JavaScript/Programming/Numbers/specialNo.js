const readline = require("readline-sync");
let a = +readline.question("Enter a Number: - ");
if (isSpecial) {
  console.log(`${a} is a Special Number.`);
}else{
    console.log(`${a} is not Special Number.`)
}

function isSpecial(n) {
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    let rem = temp % 10;
    sum += rem;
    temp = Math.trunc(temp / 10);
  }
  if (isPalindrome(sum)) {
    return true;
  } else {
    return false;
  }
}
function isPalindrome(n) {
  let temp = n;
  let rev = 0;
  while (temp > 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = math.trunc(temp / 10);
  }
  if (n === rev) {
    return true;
  } else {
    return false;
  }
}
