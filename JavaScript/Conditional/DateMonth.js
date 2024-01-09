const readline = require("readline-sync");
let year = Number(readline.question("Enter a Year...:- "));
let month = Number(readline.question("Enter a Month Number(1-12):- "));
if (
  month === 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  console.log("31 Days...");
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  console.log("30 Days...");
} else if (month == 2) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("29 Days");
  } else {
    console.log("28 Days");
  }
} else {
  console.log("are kachhda fellow give a correct month number");
}
