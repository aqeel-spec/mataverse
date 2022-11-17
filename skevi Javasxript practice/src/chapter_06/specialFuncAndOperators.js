// **** Arrow function ****
/**
 * Arrow functions are a special way of writing functions that can be
    confusing at first. Their use looks like this:
 */

//   (param1, param2) => body of the function;

// with no paramerter
//() => {/**body of the function */}

//  for one parameter (no parathesis needed)
//param => {/**Body of the function */}

//  multi line parameter
// (param1, param2) => {
//   // line 1;
//   // any number of lines;
// };

/**Arrow functions are useful whenever you want to write an implementation
    on the spot, such as inside another function as an argument. This is because
    they are a shorthand notation for writing functions. They are most often
    used for functions that consist of only one statement.
*/

// comparison b/w simple function && arrow function
// function doingStuff(x) {
//   console.log(x);
// }
// doingStuff('Great simple function')

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff('Great arrow function')

// * if we have more than 1 parameter we use it with parathesis
// let addTwoNumber = (x,y) => console.log(x + y);
// addTwoNumber(2,3) // 5

/**
 * const arr = ["squirrel", "alpaca", "buddy"];
    arr.forEach((e) => console.log("e : ", e.length));

    const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

    //console.log(materials.map(e => material.length));

    materials.map((e) => console.log(e.length));
*/

// *** Both have same result ***

/**
 * //    1st method
let sum1 = (a) => {
  return a + 100;
};
//   2nd method
let sum2 = (b) => b + 100 ; 
// 3nd method
let sum3 = c => c + 100 ; 
// calling all them
console.log(sum1(1));
console.log(sum2(1));
console.log(sum3(1));
 
// *** Output same amazing 101

*/

//Destructuring within params is supported, and always requires parentheses:
//({ a, b } = { a: 10, b: 20 }) => a + b;

/* *** Spread Operator ...spread */
// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very"]

// console.log(message);

// function addTwoNumbers(x, y) {
//   console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

// **** Rest parameter ****

/**
 * Similar to the spread operator, we have the rest parameter.
 * It has the same symbol as the spread operator,
 * but it is used inside the function parameterlist.
 *
 */

// * Wrong way * to send many org instead of 2
// function someFunction(param1, param2) {
//   console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

// function someFunc (param1 , ...param2) {
//     console.log(param1 , param2);
// }
// someFunc('Hi' , 'there' , 'How are you?')

// OutPut :
//         Hi [ 'there', 'How are you?' ]

// Returning function values
// const prompt = require('prompt-sync')();
// let favoriteSubject = prompt("What is your favorite subject?");
// function addTwoNumbers(x, y) {
//   return x + y;
// }

// let resultsArr = [];
// for (let i = 0; i < 10; i++) {
//   let result = addTwoNumbers(i, 2 * i);
//   resultsArr.push(result);
// }
// console.log(resultsArr);

// *** Practice Exercise 6.4 *** //
let arr = [];
let calculation = (param1, param2) => param1 + param2;
for (let i = 0; i < 10; i++) {
  let firstValue = i * 5;
  let secValue = i * i;
  let result = calculation(firstValue, secValue);
 // console.log(result);
  arr.push(result)
}
console.log(arr);
// * Output *
//          [ 0,  6, 14,  24,  36, 50, 66, 84, 104, 126 ]










