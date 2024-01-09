// ? LessThan(<),GreaterThan(>),GraterThanEquals(>=),LessThanEquals(<=)
// ? DoubleEquals(==),NotEquals(!=),TripleEquals(===),NotDoubleEquals(!==)
// !(===)&(!==)compare both value along with the DataTypes
function test1() {
  let a = 5;
  let b = 5;
  console.log(a > b); //!false
  console.log(a < b); //!false
  console.log(a >= b); //*true
  console.log(a <= b); //*true
  console.log(a == b); //*true
  console.log(a != b); //!false
}
test1();
// *Double and Triple Equals To...........
function test2() {
    console.log('Double and Triple Equals')
  let a = 5;
  let b = "5";
  console.log(a == b);
  console.log(a === b);
}
test2();
