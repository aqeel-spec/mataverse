/**
 * Along the way, we will cover the following topics:
    Basic functions
    Function arguments
    Return
    Variable scope in functions
    Recursive functions
    Nested functions
    Anonymous functions
    Function callbacks
 */

// ***  Writing functions *** ///
// Writing a function can be done using the function keyword. Here is the
// template syntax to do so:

// function nameOfTheFunction() {
//   //content of the function
// }

/**
 * The above function can be called like this:
   nameOfTheFunction();
 */
//      Just simple function
// const prompt = require('prompt-sync')();
// function sayHello() {
//     let you = prompt('What is your name : ');
//     console.log(`Hello, ${you}!`);
// }
// sayHello();

// *** function as a variable ***
// let varConFunc = function () {
//     let varInFunc = "I'm in a function";
//     console.log("hi there!", varInFunc);
// }
// varConFunc();

//     ***  Naming function ***

/**
 * first word start with lower letter & new(2nd) with upper this make code easier to understand
 * make sure name describe what the function is doing
 * It's better to call a number addition function * addNumbers * than  *myFunc* .
 * Use a verb to describe what the function is doing:
 * make it an action. So instead of hiThere , call it sayHi .
 */

//      ***  Practice exercise 6.1  ***

// function twoParaFunc (text1 , text2) {
//     addPara = text1 + text2 ;
//     return addPara ;
// }
// let var1Name = 'Aqeel' ;
// let var2Number = 23 ;

// // seprate save function then call
// let valueOfFunc =  twoParaFunc(var1Name , var2Number);
// console.log(valueOfFunc);
//  // create 2 more variable  and function call within func
// let var3Name = 'How are U ? ';
// let var4Name = 'AQeel' ;
// console.log(twoParaFunc(var3Name , var4Name));

//        *** Practice Exercise 6.2
// input from the user
const prompt = require('prompt-sync')();
let adj = ["super", "wonderful", "bad", "angry", "careful"];

function peopleDec () {
    let question = prompt('Please enter your name : ');
    let nameAdj = parseInt(Math.random() * adj.length);
    console.log(`${adj[nameAdj]}, ${question} `);
}
peopleDec();











