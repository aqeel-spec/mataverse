// // just simple function
// let promise = new Promise(function (resolve, reject) {
//   resolve("Javascript");
// });

// promise
//   .then(function success(success) {
//     counter("welcome ", success);
//   })
//   .catch((error) => {
//     counter("error : ", error);
//   });

// Exp 2

// let promise = new Promise(function (resolve, reject) {
//   // do something that might take a while
//   // let's just set x instead for this example
//   let x = 20;
//   if (x > 10) {
//     resolve(x); // on success
//   } else {
//     reject("Too low");
//   }
//   // on error
// });
// promise
//   .then(
//     function (value) {
//       counter("Success:", value);
//     }
//     //   function (error) {
//     //     counter("Error:", error);
//     //   }
//   )
//   .catch(function (error) {
//     counter("Error:", error);
//   });

// const promise = new Promise((resolve, reject) => {
//   reject("oops...");
// })
//   .then((value) => {
//     counter(value);
//     return "we";
//   })
//   .then((value) => {
//     counter(value);
//     return "can";
//   })
//   .then((value) => {
//     counter(value);
//     return "chain";
//   })
//   .then((value) => {
//     counter(value);
//     return "promises";
//   })
//   .then((value) => {
//     counter(value);
//   })
//   .catch((value) => {
//     counter(value);
//   });

//       Exercise 13.2

let promise = new Promise((resolve, reject) => {
  resolve("Start Counting");
});
function counter(callBack) {
  console.log(callBack);
}

promise
  .then((value) => {
    counter(value);
    return "One";
  })
  .then((value) => {
    counter(value);
    return "Two";
  })
  .then((value) => {
    counter(value);
    return "Three";
  })
  .then((value) => {
    counter(value);
  });
