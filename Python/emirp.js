let x=121
let res=isEmirp(x)?"Emirp":"Not Emirp"
console.log(res)

function isEmirp(x){
    if(isPrime(x)){
        let rev=reverse(x)
        if(isPrime(rev)){
            if(isNotPalindrome(x)){
                return true
            }
        }
    }
    return false
}
function isPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
function reverse(n){
    let rev=0
    while(n>0){
        rev=rev*10+(n%10)
        n=Math.floor(n/10)
    }
    return rev 
}

function isNotPalindrome(n){
    if(n==reverse(n)){
        return false
    }
    return true
}
