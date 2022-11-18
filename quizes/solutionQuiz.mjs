// Q1
/** 
let func = () => {
    let pets = ['Dog','Cat','Fly','Bug','ox'];
    pets = pets.slice(2,4);
    return pets[1]
}
console.log(func());
// Output : Bug
*/
// Q2
/**
 let functionVariable = function (list,check) {
    var matchFound = false ; 
    for (let i = 0 ; i < list.length; i++) {
        if (check === list[i]) {
            matchFound = true;
            break;
        }
    }
    return matchFound;
}
const cities = ["Cheyenne","Santa Fe","Turson","Great Falls","Honololu"];
console.log(functionVariable(cities,"Karachi"));
// false
*/
// Q3
/**
let z = (x,y) => x + y ; 
console.log(z(3,1));
// Output: 4
 */
// Q4
/**console.log(((x,y)=> x + y)(3,4)); */
// Output : 7
// Q5
/*
let z = (x) => {
    if (x> 2) {
        x = x+1;
        if (x < 3)
        x = x+3;
    }else {
        x = x+2;
        if(x==4) 
        x = x+1
    }
    return x;
}
console.log(z(2));
// Output : 5 ; 
// me = 4
*/

import { rejects } from "assert";
import { resolve } from "path";

// Q6
/*
let x=10 , y = 30;
if ((x <= 10 || x >= 20)&&(y<=20 || y >= 30)) {
    console.log(x,y);
}
// Output : true OR * 10 30 *
*/

// Q7
/* 
let x = 4;
if (x<5){
    a = 6; // now a value is 6
    console.log(`x = ${x} cond x < 5 : ${a}`);
}   
else {
    a = 7
    console.log(`x = ${x} cond x > 5 : ${a}`);
}

// if (x>5){
//     a = 7; // now a value is 6
//     console.log(`x = ${x} cond x > 5 : ${a}`);
// }
   
// else {
//     a = 6;
//     console.log(`x = ${x} cond x < 5 : ${a}`);
// }
*/

// Q8
// which statement not run
/**
 let m = 4 , n = 8;
if (m > 2 && n < 10) {
    if  (m > 3 || n < 1) {
        console.log('Statement A');
    }else 
       console.log('Statement B');
}else {
    if (m > 3 && n < 9 ) 
    console.log("statement C");
    else 
     console.log('Statement D');
     console.log('Statement E');
}
// statemetn C
*/

// Q9
/**
 import addTwo from "./quizeTest.mjs";
 console.log(addTwo(4));
*/
// use both files with .mjs extension  --otherwise syntax error
/**
 *step.1 *** quizeTest.mjs ***
 * export default function addTwo (num) {
    return num + 2
    }
 * step.2 *** quiz1.mjs ***  
 * import addTwo from "./quizeTest.mjs";
    console.log(addTwo(4));
    // Output : 6
*/

// Q10
/*
  let z = (x,y) => x>y?3:4;
    console.log(z(5,6));
    // Output : 4
*/

// Q11

// Link : https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time

// Q12

/** How many times loop execute
 for (let index = 0; index < 31; index++) {
    console.log(index,"Hello");
}
// Output : 31
*/

// Q13
/*
let a = 0;
function func1(callback) {
    setTimeout(function() {
        a+=5;
        callback();
        a+=9;// this value cannot be counted ignored
    },200)
}
a+=2;
func1(function() {
    console.log(a);
})
a+=3;

// now in *** func1 *** we have value of a=5;
//but later a+=2 will be *7*
// then again a+=3 will be *10*
// our final value is = 10
// Output : 10
*/

// Q14
// extension with .mjs (must use extension)
/*
const promise = new Promise((resolve , rejects) =>{
    resolve(1);
}) 
promise

  .then(value => {
    console.log(value);
    return 2
  }).then(value => {
    console.log(value);
    return 3
  }).then(value => {
    console.log(value);
    return 4
  }).then(value => {
    console.log(value);
    return 5
  }).then(value => {
    console.log(value);
  }).catch(value => {
    console.log(value);
  })
// Output : 1,2,3,4,5  
*/

// Q15
/*
var a = 5 ; 
var c = function (b) {
    a+=3;
    return b+a;
}(2);
console.log(c);
// Output : 10
*/

// Q16
// let 5variable = 5;
// Output : No

// Q17 Success,error,error caught

// Q19
/*
function saySomething (x) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve("Something"+x);
        }, 2000);
    })
}
function talk (x) {
    const word1 = await saySomething(x);
    console.log(word1);
}
talk(2);
// await only work with async
// so Output : syntax error
*/

// Q20
// node package manaer commands
/**
 * npm create
 * npm init -y
 * npm init
 */

// Q21
/*
function job() {
    return new Promise(function (resolve, reject) {
      reject();
    });
  }
  
  let promise = job();
  promise
  
    .then(function () {
      console.log("Success 1");
    })
  
    .then(function () {
      console.log("Success 2");
    })
  
    .then(function () {
      console.log("Success 3");
    })
  
    .catch(function () {
      console.log("Error 1");
    })
  
    .then(function () {
      console.log("Success 4");
    });
// Output : Error 1, Success 4
*/

// Q21
// node package manager commands
// *** npm install dependency ***
/**
 * Add reference to the dependency module
 * Find the dependency module form npmjs.org
 *
 */

// Q22
/*
let f = (nr) => {
    console.log(nr);
    if (nr > 0) {
        f(--nr)
    }
}
f(3);
// Output : 3,2,1,0
*/

// Q23
/*
import { addTwo } from "./quizeTest.mjs";
console.log(addTwo(4));
// Output : 6
*/

// Q24
/*
let myPromise = new Promise(function (myresolve, myreject) {
    setTimeout(() => {
      myresolve("I love Pakistan");
    }, 3000);
  });
  myPromise.then(function (value) {
    console.log(value);
  });
  // Output : will print "I love Pakistan" after some time
*/

// Q25
/*
let a = "55" + 5 -5;
console.log(a);
// 550
*/

// Q26
/*
let a = "We are the best developers in the World";
let b = "the World"
let c = a.indexOf(b);
console.log('before',a.length);
if (a !==-1) {
    a = a.slice(0,c)+ "Asia" + a.slice(c + b.length)
}
console.log(a);
// Output : We are the best developers in Asia
*/

// Q27
/**
 for (let x = 1; x < 10 ; x++) {
    for (let y = 1 ; y < 5 ; y++) {
        console.log(x,y,'Hello');
    }
}
// Output : 36
*/

// Q28
/**
 let a = 0;
 function func1(callback) {
     setTimeout(function() {
         a+=5;
         callback();
         a+=9;// this value cannot be counted ignored
     },200)
 }
 a+=2;
 (function() {
     func1(function() {
         console.log(a);
     })
 })(a)
 a+=3;
 // Output : 10 
*/

// Q29
/*
let dayOfWK = "Sat";
switch (dayOfWK) {
  case "Sat":
    console.log("Whoopee");
  case "Sun":
    console.log("Aha");
  case "Fri":
    console.log("TGIF");
  default:
    console.log("Shoot me now");
}
// Output : all  (✓)
// Whoopee
// Aha
// TGIF
// Shoot me now
*/

// Q30
function printArray(a) {
    let len = a.length , i = 0;
    if (len == 0 ) {
        console.log('Empty Array');
    }else {
        do {
            console.log(a[i]);
        }while (++i < len)
    }
} 
printArray("Aqeel");
// Output : print 0 to length of the Array
// *** dout *** but 80% sure about this
















