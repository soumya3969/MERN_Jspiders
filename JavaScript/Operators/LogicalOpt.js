// * (&&) (||) (!) = Returns Value Or Anytype Of Value.
function test1() {
  let a = 5;
  let b = 6;
  console.log(a > b); //! False
  console.log(a > 5 && b > 5); //! False
  console.log(a > 5 || b > 5); //* True
  console.log(!a > 5); //! False
  /* 
        * !5>5
        * !true>5
        * false>5
        * 0>5
        ! False
    */
  console.log(!(a > 5)); //* True
  /*
   * !(5>5)
   * !(False)
   * True
   */
}
test1();
/*
 *   __________________________________________
 *   |   OP-1    |   OP-2    |   &&    |  ||  |
 *   |     T     |     T     |   T     |   T  |
 *   |     T     |     F     |   F     |   T  |
 *   |     F     |     T     |   F     |   T  |
 *   |     F     |     F     |   F     |   F  |
 *   __________________________________________
 */

function test2() {
  console.log("____test2____");
  let a = 5;
  let b = 6;
  console.log(a++ > 5 && b++ > 5); //? False
  console.log(a); //? 6
  console.log(b); //? 6
  /*
   *   As the first condition became False
   *   The next part is not executed after the operator
   *   so a is incremented but b is not incremented as it not executed
   */
  a = 5;
  b = 6;
  console.log("----or condition----");
  console.log(a++ > 5 || b++ > 5); //? true
  console.log(a); //? 6
  console.log(b); //? 7
  //* In Or As first condition is false it checks the next condition.
  //* If the first condition is true it don't checks another condition so not executed.
  a = 5;
  b = 6;
  console.log("----or condition with equalsTo----");
  console.log(a++ >= 5 || b++ >= 5); //? true
  console.log(a); //? 6
  console.log(b); //? 6
}
test2();
function test3() {
  /*
   *   In js logical operator it can take anything as input and anything can be output.
   *   Based on the operator, not only the boolean value . it can take anything and gives result based on their Thuthy & Falsy Value.
   */
  console.log("-: Data Entry :-");
  console.log("hi" && 0);
  console.log(0 && "hi");
  console.log("hi" && "Bye");
  console.log("hi" && null);
  console.log("multiple ");
  console.log("hi" && 1 && 0 && "js" && null); //? 0
  /*
    *   as it takes 2 operator so it gives output according to it then go to next operation
    *   first it compares 'hi' and 1 and gives 1 as output then go to next operation with 1 so 1 && 0 gives 0 as its and (&&) operator then it returns 0 not executed further..
  */
}
test3();
