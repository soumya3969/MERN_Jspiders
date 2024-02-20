let myPromise1 = new Promise((resolve, reject) => {
  let age = 10;
  if (age > 18) {
    setTimeout(() => {
      resolve("eligible for voting");
    }, 3000);
  } else {
    reject("not eligible for voting");
  }
});
let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("you are adult now");
  }, 5000);
});

// * *****PROMISE ALLL*****
Promise.all([myPromise1, myPromise2])
.then((data) => console.log(data))
.catch((err) => console.error(err));

// * *****PROMISE ALLL Settled*****
Promise.allSettled([myPromise1, myPromise2])
.then((data) => console.log(data))
.catch((err) => console.error(err));

// * *****PROMISE RACE*****
Promise.race([myPromise1, myPromise2])
.then((data) => console.log(data))
.catch((err) => console.error(err));

// * *****PROMISE ANY*****
Promise.any([myPromise1, myPromise2])
.then((data) => console.log(data))
.catch((err) => console.error(err));