//          *** Parameters and arguments **

/**
 * A parameter is defined as the variable listed inside the parentheses of 
   the function definition, which defines the scope of the function.
*/
// function myFunc(param1, param2) {
//   // code of the function;
// }

// function addTwoNumbers(x, y) {
//   console.log(x + y);
// }
// //we can call the function with arguments:
// addTwoNumbers("arg1", "arg2");

// function tester(para1, para2) {
//   return para1 + " " + para2;
// }
// const arg1 = "argument 1";
// const arg2 = "argument 2";
// console.log(tester(arg1, arg2));;

//     *** Arguments ***

//      Exercise 6.3
// console.log("this is an argument");
// prompt("argument here too");
// let arr = [];
// arr.push("argument");

// const value1 = 1;
// const value2 = 2;

// let operator = "+";

// function calculator(a, b, c) {
//   if (c === "-") {
//     console.log(a - b);
//   } else {
//     console.log(a + b);
//   }
// }

// calculator(value1, value2, operator);

//        ----------OR---------------
// let value1 = 1;
// let value2 = 2;
// let operator = "+";

// function calculator(a, b, c) {
//   c === "-" ? console.log(a - b) : console.log(a + b);
// }
// calculator(value1, value2, operator);

//   *** Default or unsuitable parameters ***

function addTwoNumbers(x = 2, y = 3) {
  console.log(x + y);
}
addTwoNumbers();
addTwoNumbers(6, 6);
addTwoNumbers(10);
addTwoNumbers(1,2,3,4) // added firt 2 values other ignored
// // 5 
// // 12 
// // 13
//  // 3  
/**
 * If you call the function with no arguments now, it will automatically assign
    2 to x and 3 to y , unless you override them by calling the function with
    arguments. The values that are used for invoking are prioritized over
    hardcoded arguments.
*/








































