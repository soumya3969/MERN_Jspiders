/* >> Find Occurrence of given string
        {
            input: BANANA
            output:B=1
                   A=3
                   N=2
        } */

let str='banana';
let res={};
for (let i = 0; i < str.length; i++) {
    let char=str[i]
    if(res[char]){
        res[char]++;
    }else{
        res[char]=1
    }
    
}
for (let char in res) {
    console.log(`${char}=${res[char]}`);
}

let ch=[...str]
// console.log(ch)
for (let i = 0; i < ch.length; i++) {
    if (ch[i]==" ") {
        continue;
    }
    let count=1
    for (let j = i+1; j < ch.length; j++) {
        if (ch[i]==ch[j]) {
            count++;
            ch[j]=" ";
        }
    }
    console.log(`${ch[i]} =>${count}`)
    
}
console.log(ch)
































// let max;
// let maxCount=0;
// let min;
// let minCount=0;
// for (const iterator in res) {
//     // console.log(iterator)
//     // console.log(res[iterator])
//     if(res[iterator]>maxCount){
//         max=iterator;
//         maxCount=res[iterator]
//     }
// }
// console.log(max)
// console.log(maxCount)