// let rain = true ;
// if (rain) {
//     console.log("** Taking my umberella when I need to go outside **");
// }else {
//     console.log("** I can leave my umberella at homenode  **");
// }
// let hobby = "dancing";
// if (hobby = "coding") {
//   console.log("** I love coding too! **");
// } else {
//   console.log("** Can you teach me that? **");
// }
// output :  ** I love coding too! **

const PromptSync = require("prompt-sync");

//            Exercie 4.1

// let myVar = true ;
// console.log(myVar);
// if (myVar) {
//     console.log(myVar);

// }
// if (!myVar){
//     console.log(`You should have two if
//     statements, one with an ! and the other without.`);
// }else {
//     console.log('first if');
// }
// let age = 12;
// let cost = 0;
// let message;
// if (age < 3) {
//   cost = 0;
//   message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//   cost = 5;
//   message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars.";
// } else {
//   cost = 7;
//   message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);

//       Exercise 4.2
// var prompt = require('prompt-sync')();
// let userAge = Number(prompt('Hi dear! What is your age ? :'));
// let message ;

// if (userAge >= 21) {
//    // console.log('Please cnfrm your age to purchase alcohol');
//     message = 'You\'r eligible to purchase alcohol'
// }else if (userAge >=19) {

//     message = 'You\'r young and cannot buy alcohol';
// }else {
//     message = 'Sorry you\'r too young & cannot buy alcohol'
// }
// console.log(message);

//    conditional ternary operator
/* 
  This is why our ternary operator has its name; it has three operands. Here is
its template:
operand1 ? operand2 : operand3;
operand1 is the expression that is to be evaluated. If the value of the
expression is true , operand2 gets executed. If the value of the expression
is false , operand3 gets executed. You can read the question mark as
"then" and the colon as "else" here:
*/

// let expre = !false ;

// expre ? console.log('expre is true') : console.log('expre not false');

/**The template for saying it in your head should be:
if *operand1*, then *operand2*, else *operand3*
Let's have a look at a few examples: */
// let age  = 21;
// let access = age < 18 ? 'denied' : 'allowed';
// console.log(access);

//      Exercise 4.3
// let id = false ;
// let msg = id ? 'you\'r allowed' : 'you\'r denied' ;
// console.log(msg);

//        generate a random value from array and save it **Activity**
// let activityValue = ['Get up', "Breakfast","Drive to work","Lunch","Drive home","Dinner"];
// let  activityNum = parseInt(Math.random() * activityValue.length)
// console.log('random created number : ->>>>',activityNum);
// let activity = activityValue[activityNum];
// console.log('random created value : ->>>>',activity);

// if (activity === "Get up") {
//   console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//   console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//   console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//   console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//   console.log("It is 5:00PM");
// } else if (activity === "Dinner") {
//   console.log("It is 6:30PM");
// }

//     Switch statemant

// *** syntax
// switch (expression) {
//   case value1:
//     // code to be executed
//     break;
//   case value2:
//     // code to be executed
//     break;
//   case value - n:
//     // code to be executed
//     break;
// }

// let activityValue = [
//   "Get up",
//   "Breakfast",
//   "Drive to work",
//   "Lunch",
//   "Drive home",
//   "Dinner",
// ];
// let activityNum = parseInt(Math.random() * activityValue.length);
// console.log("random created number : ->>>>", activityNum);
// let activity = activityValue[activityNum];
// console.log("random created value : ->>>>", activity);
// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30AM");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//   case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//   case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//   case "Dinner":
//     console.log("It is 6:30PM");
//     break;
// }

// switch with ** default ** case similar to else statement
// let activity = "shahzad";

// switch (activity) {
//   case "Get Up":
//     console.log("It is a 6:30AM");
//     break;
//   case "Lunch":
//     console.log("It is a 12:30PM");
//   default :
//     console.log('Not found dude');
// }

// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30AM");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//   case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//   case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//   case "Dinner":
//     console.log("It is 6:30PM");
//     break;
//   default:
//     console.log("I cannot determine the current time.");
//     break;
// }

// Exercise 4.4

// var prompt = require("prompt-sync")();

// let randomNum = Math.random();
// let randomNumWitMul = Math.floor(randomNum * 5);
// let userInput = prompt("Please enter your name : ");
// let msg ;
// switch (randomNumWitMul) {
//   case 0:
//     msg = `${userInput} , Your baby & & you'r 2 year old`;
//     console.log(`You'r value is ${randomNumWitMul}`);
//     break;
//   case 1:
//     msg = `${userInput} , Your  child & you'r 5 year old`;
//     console.log(`You'r value is ${randomNumWitMul}`);
//     break;
//   case 2:
//     msg = `${userInput} , Your young & you'r 15 year old`;
//     console.log(`You value is ${randomNumWitMul}`);
//     break;
//   case 3:
//     msg = `${userInput} , Your mature & & you'r 21 year old`;
//     console.log(`You'r value is ${randomNumWitMul}`);
//     break;
//   case 4:
//     msg = `${userInput} , Your elder & & you'r 45 year old`;
//     console.log(`You'r value is ${randomNumWitMul}`);
//     break;
//   case 5:
//     msg = `${userInput} , Your old & & you'r above 50 year old`;
//     console.log(`You'r value is ${randomNumWitMul}`);
//     break;
// }
// console.log(msg);

//     Combinning cases
// let grade = 'a';
// switch (grade.toUpperCase()) {
//   case "F":
//   case "D":
//     console.log("You've failed!");
//     break;
//   case "C":
//   case "B":
//     console.log("You've passed!");
//     break;
//   case "A":
//     console.log("Nice!");
//     break;
//   default:
//     console.log("I don't know this grade.");
// }

//  Exercise 4.5

// var prompt = require("prompt-sync")();

// let prize = Number(prompt("Select a value between 0 and 10 : "));
// let mySelection;
// switch (prize) {
//   case 0:
//   case 1:
//   case 3:
//     mySelection = "Congrats! You have win 1st prize";
//     break;
//   case 4:
//   case 5:
//   case 6:
//     mySelection = "Congrats! You have win 2st prize";
//     break;
//   case 7:
//   case 8:
//   case 9:
//     mySelection = "Congrats! You have win 3st prize";
//     break;
//   case 10:
//     mySelection = "Sorry! You cannot win prize. Try next time";
//     break;
//   default:
//     mySelection = "You'r value is out of range";
// }
// console.log(mySelection);

//      **** Chapter projects ***

//       ** Ecaluating a number game **

// var prompt = require('prompt-sync')();
// let userNum = Number(prompt('Please enter a number : '));
// if (userNum >= 20 ) {
//     console.log('Your number is greater then or equal 20');
// }else if (userNum <= 20) {
//    console.log('Your number is less then or equal 20');
// }

//       ** Friend checker game **
// var prompt = require("prompt-sync")();
// let userName = prompt("Please enter your name : ");
// switch (userName) {
//   case "shahzad":
//   case "muzammal":
//   case "noman":
//   case "haider ":
//   case "farooq":
//     console.log("User is a friend");
//     break;
//   default:
//     console.log("I don't know the person");
// }
//       ** Rock Paper Scissors game **

// let arr = ['Rock' , 'Paper' , 'Scissors'];
// let userSelectionRandomNum = Math.floor(Math.random() * arr.length )
// let compSelectionRandomNum = Math.floor(Math.random() * arr.length )
// let userSelection = arr[userSelectionRandomNum];
// let compSelection = arr[compSelectionRandomNum];

// console.log('userSelection is :',userSelection);
// console.log('compSelection is :',compSelection);
// if (userSelection === compSelection) {
//     console.log('tie');
//     console.log('You win');
// }else if (userSelectionRandomNum > compSelectionRandomNum){
//     console.log(`${userSelection} beating ${compSelection}`);
//     console.log('User win over comp');
// }else if (userSelectionRandomNum < compSelectionRandomNum){
//     console.log(`${compSelection} beating ${userSelection}`);
//     console.log('comp win over user');
// }

//    ** Self quize questions **
// let q = "one";
// switch (q) {
//   case "1":
//     answer = "one";
//     break;
//   case 1:
//     answer = 1;
//     break;
//   case 2:
//     answer = "this is the one";
//     break;
//   default:
//     answer = "not working";
// }
// console.log(answer);

// what will be the output of the block
// let login = false;
// let outputHolder = "";
// let userOkay = login ? outputHolder = "logout" : outputHolder='login';
// console.log(userOkay);

// const userNames = ["Mike", "John", "Larry"];
// const userInput = "John";
// let htmlOutput = "";
// if (userNames.indexOf(userInput) > -1) {
//   htmlOutput = "Welcome, that is a user";
// } else {
//   htmlOutput = "Denied, not a user ";
// }
// console.log(htmlOutput + ": " + userInput);
//       output --- welcome, that is a user : John

//5. What will be outputted to the console in this instance?
// let myTime = 9;
// let output;
// if (myTime >= 8 && myTime < 12) {
// output = "Wake up, it's morning";
// } else if (myTime >= 12 && myTime < 13) {
// output = "Go to lunch";
// } else if (myTime >= 13 && myTime <= 16) {
// output = "Go to work";
// } else if (myTime > 16 && myTime < 20) {output = "Dinner time";
// } else if (myTime >= 22) {
// output = "Time to go to sleep";
// } else {
// output = "You should be sleeping";
// }
// console.log(output);

//Wake up, it's morning

//6. What will be outputted to the console in this instance?
// let a = 5;
// let b = 10;
// let c = 20;
// let d = 30;
// console.log(a > b || b > a); // true
// console.log(a > b && b > a); // false 
// console.log(d > b || b > a); // true
// console.log(d > b && b > a); // true

// 7. What will be outputted to the console in this instance?
let val = 100;
let message = (val > 100) ? `${val} was greater that 100` : `${val} is equal to 100`;
console.log(message);// 100 is equal to 100
let check = (val % 2) ? `Odd` : `Even`;
check = `${val} is ${check}`
console.log(check);









