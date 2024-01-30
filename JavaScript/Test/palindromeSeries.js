const readline = require('readline-sync');
let a=+readline.question(`Enter Starting Number:- `);
let b=+readline.question(`Enter Ending Number:- `);

for(let i=a;i<=b;i++){
    if(isPalindrome(i)) {
        console.log(`${i} is a Palindrome Number. `);
      }
}

function isPalindrome  (n) {
    let rev=0;
    let temp=n
    while (temp>0) {
        let rem=temp%10;
        rev=rev*10+rem;
        temp=Math.trunc(temp/10);
    }
    if (rev===n) {
        return true;
    } else {
        return false;
    }
}