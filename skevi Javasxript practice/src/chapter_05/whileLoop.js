// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jackel"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//   }
// }

//1.start 2.value while (conditions) { 3.i++ }
// let i = 0 ;
// while (i < 10) {
//   i++;
//   console.log(i);
// }
// let n = 0;
// let x = 0;

// while (n < 3) {
//   n++;
//   x += n;
// }
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jackel"];
// console.log(someArray);
// let notFound = true;
// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Marc") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//   }
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];
// while (fibonacciArray.length < 6) {
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2;
//   nr1 = nr2;
//   nr2 = temp;
// }
// console.table(fibonacciArray);


//     Exercise 5.1 
var prompt = require("prompt-sync")();
let maxValue = 10;
let corrAns = Math.floor(Math.random() * maxValue + 1);
//console.log(ranNum);
let status = false;
while (!status) {
  let userAns = Number(prompt("Choose a number b/w 0 to 5 : "));
  if (userAns === corrAns) {
    status = true;
    console.log(`You win! The number is  ${corrAns} `);
  } else if (userAns > corrAns) {
    console.log("Your guess is too high");
  } else {
    console.log("Sorry! your guess is too low");
  }
}
