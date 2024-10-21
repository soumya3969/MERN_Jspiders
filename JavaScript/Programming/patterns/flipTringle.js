let num=5;
let res='';

for(let i=1;i<=num;i++){
    for(let j=1;j<=num-i;j++){
     res+="  "
    }
    for(let j=1;j<=i;j++){
     res+=j+" "
    }
    res+='\n'
}
console.log(res)