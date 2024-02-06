// * JavaScript is a dynamic type programming language
// * Dynamic type programming language means at the time of variable declaration we no need to declare datatype
// * Datatypes are assign to a variable at runtime at runtime by Js Engine.
function test1() {
    let a;
    console.log(a,typeof a) //? undefined undefined
    a=10;
    console.log(a,typeof a)//? 10 number
    a='jspider'
    console.log(a,typeof a)//?jspider string
    a= true
    console.log(a,typeof a)//?true boolean
}
test1()