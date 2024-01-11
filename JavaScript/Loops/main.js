const readline = require("readline-sync");
function main() {
  function table() {
    let n = +readline.question("Enter Table Number:- ");
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} * ${i} = ${n * i}`);
    }
  }
  //   table();

  
}
main();
