let a = "abc";
let res = "";
for (let index = a.length; index >= 0; index--) {
  res += a.charAt(index);
}
console.log(res);
