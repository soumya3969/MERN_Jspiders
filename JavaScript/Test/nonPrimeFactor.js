const readline = require("readline-sync");
let a = readline.question("Enter a Number :- ");
if (isPrime(a)) {
  console.log(`${a} is a prime number `);
} else {
  console.log(`${a} is not a prime number `);
  factors(a);
}
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.trunc(n / 2); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function factors(a) {
    console.log('factors of '+a+' are :');
    for(let i=1;i<=a;i++){
        if(a%i===0){
            console.log(i);
        }
    }
}
