const readline = require("readline-sync");
let unit = Number(readline.question("Enter The Unit :- "));
function calculateBill(units) {
  if (units <= 200) {
    return 0;
  } else if (unit <= 250) {
    return (units - 200) * 3;
  } else if (units <= 300) {
    return 150 + (units - 250) * 5;
  } else {
    return ((150) + (250) + ((units - 300) * 7));
  }
}
let billAmt = calculateBill(unit);
console.log(`The Electricity Bill For ${unit} Units Is Rs.${billAmt}`);
