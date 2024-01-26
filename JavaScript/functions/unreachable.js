main();
function main() {
  console.log("main starts");
  m1();
  console.log("main ends");
}
function m1() {
  console.log("m1 Starts");
  return;
  console.log("m1 ends"); //! unreachable statement.
}
function m2() {
  console.log("line-1");
  console.log("line-2");
  return;
  console.log("line-3"); //! unreachable statement.
}
m2();
function m3() {
  if (true) {
    console.log("line-1");
    console.log("line-2");
    return;
    console.log("line-3"); //! unreachable statement.
  }
  console.log("line-4");
}
