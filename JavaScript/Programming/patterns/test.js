// /*
//         5   4   3   2   1
//             4   3   2   1
//                 3   2   1
//                     2   1
//                         1

// */

// // let n = 5;
// // let spaces = " ";
// // let rem = "";
// // let k = 5;

// // for (let i = 1; i <= 5; i++) {
// //   for (let j = 1; j < i; j++) {
// //     rem += "  ";
// //   }
// //   for (let j = 6 - i; j >= 1; j--) {
// //     rem += j + " ";
// //   }
// //   rem += "\n";
// // }
// // console.log(rem);

// //*
// /*
//             1
//           1   1
//         1   2   1
//       1   3   3   1
//     1   4   6   4   1
// */

// function pascal() {
//   let n = 5;
//   let res = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//       res += " ";
//     }
//     let k = 1;
//     for (let j = 1; j <= i; j++) {
//       k = Math.trunc(k * (i - k) / k);
//       res += k;
//     }
//     res += "\n";
//   }
//   console.log(res);
// }
// pascal();

//* 54321
// * 4321
//  * 321
//   * 21
//     *1

let n = 5;
let res = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < i; j++) {
    res += " ";
  }
  for(let j=6-i;j>=1;j--){
    res+=j;
  }
  res+='\n'
}
console.log(res)
