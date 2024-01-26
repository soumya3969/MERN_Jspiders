const readline = require('readline-sync');
let a=readline.question('Enter a Number :- ')
factors(a)

function factors(a) {
    console.log('factors of '+a+' are :');
    for(let i=1;i<=a;i++){
        if(a%i===0){
            console.log(i);
        }
    }
}