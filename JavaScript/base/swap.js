let a = 10;
let b = 20;
function swapWith3rdVariable(x, y) {
  let temp;
  temp = x;
  x = y;
  y = temp;
  console.log("swapping with 3rd Variable:");
  console.log(`a = ${x} and b = ${y}`);
}
swapWith3rdVariable(a, b);
// console.log(a,b);
function swapWithout3rdVariable(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
  console.log("swapping without 3rd Variable:");
  console.log(`a = ${x} and b = ${y}`);
}
swapWithout3rdVariable(a,b);
