function isArmstrong(num) {
  let temp = num;
  let digit = 0;
  let sum = 0;
  while (temp > 0) {
    digit++;
    temp = Math.trunc(temp / 10);
  }
//   console.log(`digit=${digit}`);
  temp = num;
  while (temp > 0) {
      let rem = temp % 10;
      sum = sum + Math.pow(rem, digit);
      temp = Math.trunc(temp / 10);
    }
    // console.log(`sum=${sum}`);

  if (sum == num) {
    console.log(`${num} is an Armstrong Number`);
  } else {
    console.log(`${num} is not an Armstrong Number`);
  }
}
let b=9474
const readline = require('readline-sync');
let a=readline.question('enter a Number:- ')
isArmstrong(a);