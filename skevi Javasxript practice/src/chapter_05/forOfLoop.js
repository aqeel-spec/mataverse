/**  ********for of loop****** */

/**
 * There is another loop we can use to iterate over the elements of an array:
    the for of loop. It cannot be used to change the value associated with the
    index as we can do with the regular loop, but for processing values it is a
    very nice and readable loop.
*/

// Here is what the syntax looks like:
// let arr = [some array];
// for (let variableName of arr) {
// // code to be executed
// // value of variableName gets updated every iteration
// // all values of the array will be variableName once
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names) {
//   console.log(name);
// }
// Syntax;
// for (variable of iterable) statement;

// const iterable = "boo";

// for (const value of iterable) {
//   console.log(value);
// }
// // "b"
// // "o"
// // "o"

// ***  Exercise 5.6  ***

let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);
console.log("Length of arr is : ", arr.length);
for (let arrValues of arr) {
  console.log(arrValues);
}
