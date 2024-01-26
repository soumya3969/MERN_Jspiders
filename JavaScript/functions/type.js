main();
function main() {
  console.log("main starts");
  let output = m1();
  console.log("returned value from m1() is "+output);
  console.log("main ends");
  return;
}
function m1() {
  console.log("m1 is executing");
//   return 1;
  return true;
//   return "jspiders";
}
