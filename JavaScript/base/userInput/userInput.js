function userInput() {
  
  let n1 = Number(prompt("enter 1st Number:-"));
  let n2 = Number(prompt("enter 2nd Number:-"));
  let m ;
  function add(x, y) {
    let res = x + y;
    m=res
    console.log(`addition of ${x} + ${y} = ${res}`);
  }
  add(n1, n2);

let k=document.querySelector('.display').innerHTML=m;
document.querySelector('.display').style.border='1px solid red';
document.querySelector('.display').style.textAlign='center';
document.querySelector('.display').style.width='50px';
document.querySelector('.btns').className='buttin'
console.log(k);

  
  console.log(n1,typeof n1);
  console.log(n2,typeof n2);
}
