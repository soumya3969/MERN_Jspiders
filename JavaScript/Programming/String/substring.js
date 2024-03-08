let str='malayalam'
let subStr
for(let i=0;i<=str.length-2;i++){
    for(let j=i+2;j<=str.length;j++){ // *we can take let j= i+1.
        subStr=str.slice(i,j)         // *here we can give str.slice(i,j+1).
        // console.log(subStr)           // *we get the same output.
        if (isPalindrome(subStr)) {
            console.log(subStr);
          }
    }
}
function isPalindrome(n) {
    let s = n;
    let a = 0;
    let b = n.length - 1;
    while (a < b) {
      if (s.charAt(a) != s.charAt(b)) {
        return false;
      }
      a++;
      b--;
    }
    return true;
  }