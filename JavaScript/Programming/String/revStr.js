const readline = require('readline-sync');

// * REVERSE A STRING-----
function revStr(n) {
  let rev = "";
  let rev2 = "";
  for (let i = n.length - 1; i >= 0; i--) {
    // console.log(n[i])
    rev += n[i];
    rev2 += n.charAt(i);
  }
  console.log(rev);
  console.log(rev2);
}
let a=readline.question('Enter A String: ')
revStr(a);
