
let n=5;
let res='';
let k=1
for(let i=1;i<=n;i++){
 for(let j=1;j<=i;j++){
  res+=k+" ";
  k++
 }
 res+='\n'
}
console.log(res)