main();
function main () {
    let i =m1();
    console.log(i);
    let j = m1()*20;
    console.log(j);
    console.log(m1());
}
function m1 () {
    console.log('m1 is executing');
    return 10;
}