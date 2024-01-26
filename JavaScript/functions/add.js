main();
function main() {
  console.log("main starts");
  let output = add();
  console.log(output);
  console.log("main ends");
  return;
}
function add() {
  let a = 1;
  let b = 2;
  let res = a + b;
  return res;
}
