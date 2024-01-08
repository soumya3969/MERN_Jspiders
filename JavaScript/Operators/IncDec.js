function test1() {
  let qtn = 1;
  // qtn=qtn+1;
  qtn += 1;
  console.log(qtn);
  qtn -= 1;
  console.log(qtn);
}
test1();

// *undefined means the variable is declared but not assigned any value to it.
// *Null means a empty space or represent a blank object.
// *Nan means not a number ,it has same properties as number , but not a legal number.

function test2() {
  let a = 1;
  a = a++;
  console.log(a);
  let b =1
  let c=b++
  console.log(b,c);
}
test2();

