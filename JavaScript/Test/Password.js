const readline = require("readline-sync");
let psw = readline.question("Enter The Password:- ");
console.log(validatePsw(psw));

function validatePsw(password) {
  let hasCapital = false;
  let hasSmall = false;
  let hasNumber = false;
  let hasSymbol = false;

  const symbols = "!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?";

  for (const i in password) { //* Soumya@123
    let char = password[i];
    if (char >= "A" && char <= "Z") {
      hasCapital = true;
    }else if (char>='a' && char<='z') {
        hasSmall=true;
    }else if(char>='0' && char<='9'){
        hasNumber=true;
    }else if(symbols.includes(char)){
        hasSymbol=true;
    }
  }
  if(hasCapital==false)
}
