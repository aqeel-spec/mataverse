// let val = 100;
// function tester(val) {
//   val += 10;
//   if (val < 100) {
//     return tester(val);
//   }
//   return val;
// }
// tester(val);
// console.log(val);
// Output 10

// let testFunction = (function () {
//   console.log("Hello");
// })();
// Output : Hello

// (function () {
//   console.log("Welcome");
// })();
// (function () {
//   let firstName = "Laurence";
// })();
// let result = (function () {
//   let firstName = "Laurence";
//   return firstName;
// })();
// console.log(result);
// (function (firstName) {
//   console.log("My Name is " + firstName);
// })("Laurence");
// Welcome
// Laurence
// My Name is Laurence

// let test2 = (num) => num + 5;
// console.log(test2(14));
// // 19

var addFive1 = function addFive1(num) {
  return num + 2;
};
let addFive2 = (num) => num + 2;
console.log(addFive1(14));
// Output : 16