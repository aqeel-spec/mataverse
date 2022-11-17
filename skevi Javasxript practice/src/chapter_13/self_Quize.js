// function addOne(val) {
//   return val + 1;
// }
// function total(a, b, callback) {
//   const sum = a + b;
//   return callback(sum);
// }
// console.log(total(4, 5, addOne));
// // 10

// function checker(val) {
//   return new Promise((resolve, reject) => {
//     if (val > 5) {
//       resolve("Ready");
//     } else {
//       reject("Oh no");
//     }
//   });
// }
// checker(6)
// .then((data) => {console.log(data); })
// .catch((err) => {console.error(err); })
// .finally(() => { console.log("done");});
async function myFun() {
  return "Hello";
}
myFun().then(
  function (val) {
    console.log(val);
  },
  function (err) {
    conole.log(err);
  }
);
