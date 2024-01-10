const readline = require("readline-sync");
function currencyConvert() {
  let amt = Number(readline.question("Enter Amount."));
  if (amt >= 2000) {
    console.log(Math.floor(amt / 2000));
    amt = amt % 2000;
  }
  if (amt >= 500) {
    console.log(Math.floor(amt / 500));
    amt %= 500;
  }
  if (amt >= 200) {
    console.log(Math.floor(amt / 200));
    amt %= 200;
  }
  if (amt >= 100) {
    console.log(Math.floor(amt / 100));
  }
}
currencyConvert();
