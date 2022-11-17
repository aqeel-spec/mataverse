// code block to be executed at least once.
//For example, if you need valid user input, you need to ask at least once.

// ** Syntax **
// do {
//     // code to be executed
// }while (condition);

// let prompt = require('prompt-sync')();
// let number;
// do {
//   number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));


//         ** Exercise 5.2 ** 

let counter = 0 ; 
let step ; 
do {
    console.log(counter);
    step = 2;
    counter += step ;
}while(counter <= 100)











