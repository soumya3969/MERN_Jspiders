const readline = require('readline-sync');
let a=+readline.question('Enter a Number:- ');

isArmstrong(a);

function isArmstrong (n) {
    let sum=0;
    let temp=n;
    let digit=0;
    while(temp>0){
        digit++;
        temp=Math.trunc(temp/10);
    }
    temp=n;
    while (temp>0) {
        let rem=temp%10;
        let pow=Math.pow(rem,digit);
        sum+=pow;
        temp=Math.trunc(temp/10);
    }
    if (sum===n) {
        console.log(`${n} is an Armstrong Number`);
    } else {
        console.log(`${n} is not an Armstrong Number`);
        
    }
}