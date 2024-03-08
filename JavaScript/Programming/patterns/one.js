function one () {
    // let space='';
    let n= 5;
    for (let i = 1; i <= n; i++) {
        for(let j=1;j<i;j++){
            if(i<j){
                console.log(' ');
            }
        }
        for(let k=i;k<=i;k++){
        
        console.log(k)
        }
        console.log('\n')
    }
}
// one()

function twoLoops () {
    let res=" ";
    for (let i = 1; i <= 5; i++) {
        for(let j=1;j<=5;j++){
            if (j<i) {
                console.log(res)
                res+='';
            }else{
                console.log(j)
            }
        }

    }
}
twoLoops();