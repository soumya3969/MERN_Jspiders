let num = 5;
let res = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (i == 1 || i == num) {
      res += "* ";
    } else {
      if (j == 1 || j == num) {
        res += "* ";
      } else {
        res += "  ";
      }
    }
  }
  res+='\n'
}
console.log(res)