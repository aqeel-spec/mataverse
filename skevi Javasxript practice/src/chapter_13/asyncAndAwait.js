// function saySomething(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("something" + x);
//     }, 2000);
//   });
// }
// async function talk(x) {
//   const words = await saySomething(x);
//   console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//const { resolve } = require("path");

// async function waitingNum() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Welcome shahzad1");
//     }, 3000);
//   });
//   let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Welcome shahzad2");
//     }, 9000);
//   });
//   console.log('Data is loading ... ');
//   console.log('\n *** promiseSol1 is loading ... *** \n');
//   let promiseSol = await promise;
//   console.log('promiseSol is loaded : ' , promiseSol);
//   console.log('\n *** promiseSol2 is loading ... ***\n');
//   let promiseSol2 = await promise2;
//   console.log('promiseSol2 is loaded : ',promiseSol2);
//   return [promiseSol, promiseSol2];
// }
// let num = waitingNum()
// console.log(num);;
// num.then ((value) => {
//     console.log(value);
// })

// function reAfter2Sec (x) {
//     return new Promise ((resolve)=> {
//         setTimeout(() => {
//             resolve(x);
//         }, 200);
//     });
// }
// async function f1 () {
//     const x = await reAfter2Sec (10)
//     console.log(x);
// }
// f1 () ;

// async function f1() {
//   const thenable = {
//     then(resolve, _reject) {
//       resolve("resolved!");
//     },
//   };
//   console.log(await thenable); // "resolved!"
// }
// f1();
// async function f3() {
//   const y = await 20;
//   console.log(y); // 20

//   const obj = {};
//   console.log((await obj) === obj); // true
// }

// f3();



//  *** Exercise 13.3 *** //

let counter = 0;
function counterArg (para) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            counter++ ; 
            resolve(`x value ${para} counter : ${counter}`);
        }, 1000);
    })
}
async function output (val) {
    console.log(`ready ${val} counter : ${counter}`);
    
    let capture = await counterArg(val) ;
    console.log(capture); 
}
for (let i = 1; i < 4; i++) {
    output(i)    
}
/** // Output // 
 * ready 1 counter : 0
    ready 2 counter : 0
    ready 3 counter : 0
    x value 1 counter : 1
    x value 2 counter : 2
    x value 3 counter : 3
*/













