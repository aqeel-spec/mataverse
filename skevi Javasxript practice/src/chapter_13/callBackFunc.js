// function myFunc(execution) {
//     execution();
//     console.log('Hello from myFunc');
// }

// let myFunc1 = () => console.log('Hello from 1 function');

// myFunc(myFunc1)

// function judge(grade) {
//   switch (true) {
//     case grade === "A":
//       console.log("You got an", grade, ": amazing!");
//       break;
//     case grade === "B":
//       console.log("You got an", grade, ": well done!");
//       break;
//     case grade === "C":
//       console.log("You got an", grade, ": alright!");
//       break;
//     case grade === "D":
//       console.log("You got an", grade, ": hum...!");
//       break;
//     default:
//       console.log("An", grade, "! what?");
//   }
// }

// function getGrade(score, callBack) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       console.log(score);
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }
//   callBack(grade);
// }

// getGrade(95,judge)



// let a = ()=> {
//     console.log("You're doing great, keep going!");
// };
// setInterval(a , 2000); // Keep going

// const prompt = require('prompt-sync')();
// function greeting (name) {
//     console.log(`Hello, ${name}`);
// }

// function processUserInpt (callBack) {
//     let name = prompt('Please enter your name : ')
//     callBack(name)
// }
// processUserInpt(greeting);

// *** Synchronous *** refers 
//to real-time communication where each party receives (and if necessary, processes and replies to) messages instantly 

//   *** Asychronous ***

// visit : https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous

//    Practice exercie 13.1

function greet (fullName) {
    console.log(`Hello, ${fullName[0]} ${fullName[1]}`);
    // for (let name of fullName ) {
    //     console.log(`Hello, ${name}`);
    // }
     
    // for (let i = 0 ; i < fullName.length ; i++) {
    //     let name2 ;
    //     name2 += fullName[i] ; 
    //     console.log(name2);
    // }
}

function mainFunc (userName , callBack) {
    let name = userName.split(' ');
    callBack(name);
}
mainFunc('Aqeel Shahzad', greet)

















