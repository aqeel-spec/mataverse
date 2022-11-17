// function testAvailability(x) {
//   console.log("Available here:", x);
// }
// testAvailability("Hi!");
// console.log("Not available here:", x);

// Available here: Hi!
// ReferenceError: x is not defined

//
// function testAvailability() {
//   let y = "Local variable!";
//   console.log("Available here:", y);
// }
// testAvailability();
// console.log("Not available here:", y);

// Available here: Local variable!
// ReferenceError: y is not defined

// {
//     var a = 1;

// }
// console.log(a);// flobal with var & local with let

// function testAvailability() {
//   let y = "I'll return";
//   console.log("Available here:", y);
//   return y;
// }
// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);
// function doingStuff() {
//   if (true) {
//     var x = "local";
//   }
//   console.log(x);
// }
// doingStuff();
// function doingStuff() {
//   if (true) {
//     console.log(x);
//     var x = "local";
//   }
// }
// doingStuff();

// *** const Scope *** //

// function doingStuff() {
//   if (true) {
//     const X = "local";
//   }
//   console.log(X);
// }
// doingStuff();
// // ReferenceError: X is not defined

// let x = "global";
// function doingStuff() {
//   let x = "local";
//   console.log(x);
// }
// doingStuff();
//console.log(x);
// LOcal
// global
//  for more detail visit book pg = 197

// function confuseReader() {
//   x = "Guess my scope...";
//   console.log("Inside the function:", x);
// }
// confuseReader();
// console.log("Outside of function:", x);
// // output same x is working Wow............

// *** *IIFE* Immediately invoked function expression *** //
/**
 * The immediately invoked function expression (IIFE) is a way of 
   expressing a function so that it gets invoked immediately.
 * It is anonymous, it doesn't have a name,
 * Also called self calling
 * pg = 198
 */

// (function () {
//   console.log("Aqeel");
// })();
// (() => {
//   console.log("Shahzad");
// })();
// //  same work

//   ***  Exercise 6.5 *** //
let value = '1000';
(() => {
    let value = '100';
    console.log(value);
})();

//let result = 20;
let result = (function (){
    let value = 'Aqeel' ;
    return value
})();
console.log(result);
console.log(value);
((value ) => {
    console.log(`My name is ${value}`);
})('Shahzad')

//let val = "1000";
// (function () {
//   let val = "100"; // local scope variable
//   console.log(val);
// })();
// let result = (function () {
//   let val = "Laurence";
//   return val;
// })();
// console.log(result);
// console.log(val);
// (function (val) {
//   console.log(`My name is ${val}`);
// })("Laurence");
