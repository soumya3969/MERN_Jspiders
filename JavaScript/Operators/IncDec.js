function test1() {
  console.log("test1:-");
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
  console.log("test2:-");
  console.log(a);
  let b = 1;
  let c = b++;
  console.log(b, c);
  let d = 1;
  d = ++d;
  console.log(d);
  let e = 1;
  let f = ++e;
  console.log(e, f);
}
test2();
function test3() {
  let a = 1;
  a = a++ + a;
  console.log("test3:-");
  console.log(a);
}
test3();
function test4() {
  console.log("test4:-");
  let a = 1;
  let b = a++ + ++a + a++;
  console.log(a, b);
}
test4();
function test5() {
  console.log("test5");
  let a = 1;
  a = ++a;
  console.log(a); //2
  a = ++a;
  console.log(a); //3
  a = a++;
  console.log(a); //3
  a = a++;
  console.log(a); //3
}
test5();
function test6() {
  console.log("test6:-");
  let a = 1;
  console.log(++a);
  console.log(++a);
  console.log(a++);
  console.log(a++);
}
test6();
function custom() {
  console.log("Custom Question:-");
  let a = 5;
  let b = a--;
  b = ++a;
  b = a++;
  b = --a;
  b += b++;
  console.log(a, b);
  console.trace(a, b);
}
custom();
