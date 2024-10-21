// !Sum Of Elements in a array.
let a=[10,20,30,40,50]
let sum=0;
for(let i=0;i<a.length;i++){
 sum+=a[i];
}
console.log(sum);


// !Sum of even index.
let sumEven=0;
for(let i=0;i<a.length;i++){
    if (i%2==0) {
        sumEven+=a[i]
    }
   }
console.log(sumEven)