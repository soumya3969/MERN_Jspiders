
let temp = 13;
// let k=temp

let sum = 0;
while (temp > 9) {
  while (temp > 0) {
    let rem = Math.trunc(temp % 10);
    sum += rem * rem;
    temp = Math.trunc(temp / 10);
  }
  console.log(sum)
  temp=sum
  sum=0;
}
if (temp === 1) {
    console.log(true)
}else{
    console.log(false)
}

