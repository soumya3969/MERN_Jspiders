let num=5;
let res=''
for(let i=0;i<num;i++){
 for(let j=1;j<=num-i;j++){
  res+=j+" "
 }
 res+='\n'
}
console.log(res)