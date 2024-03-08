// ?>> Remove duplicate character in a given string. { BANANA= BAN}

let str = "banana";
let temp = "";
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  let flag = false;
  for (let j = 0; j < i; j++) {
    if (char == str[j]) {
      flag = true;
      break;
    }
  }
  if (flag === false) {
    temp += char;
  }
}
console.log(temp);
