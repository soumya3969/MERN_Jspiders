main();
function main() {
    console.log('main starts');
    m1();
    console.log('main ends');
}
function m1() {
    console.log('m1 Starts');
    m2();
    console.log('m1 ends');
}
function m2() {
    console.log('m2 Starts');
    console.log('m2 ends');
}