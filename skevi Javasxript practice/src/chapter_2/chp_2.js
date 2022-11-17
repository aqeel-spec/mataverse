// let firstname = 'Maria' ;
// firstname = 'Jockey' ;

// console.log(firstname);
// const some_Constant = 3 ;
// //someConstant = 4 ;
// console.log(some_Constant);

// Permitive data types
//let funActivity1 = 'Let's leanrn Javascript' ;
/* Above example error because ' whenever seen Javascript it will ends
executing there as a result error */

// let funActivity = "Let's leanrn Javascript";
// console.log(funActivity);

//         //     Below line not work
//let question = "Do you want to learn JavaScript? "Yes!"";
//           //    Below line working
//let question = "Do you want to learn JavaScript? 'Yes!'";

// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

//   //       Escape character
// let str = "Hello, what's your name? Is it \"Mike\"?";
// console.log(str);
// let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// console.log(str2);
/* 
    The escape character has even more purposes. You can use it to create a line
    break with \n ,  \t for more space , or to include a backslash character in the text with \\ :
*/

// let str3 = "New \n Line" ;
// let str4 = "I'm containing a \t blaclslash : \\!" ;
// console.log(str3);
// console.log(str4);

//       // Numbers
// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;
// let octNr = 0o10; //decimal version would be 8
// let hexNr = 0x3E8; //decimal version would be 1000
// let binNr = 0b101; //decimal version would be 5
// let binNr2 = 0b101 ;
// console.log(intNr);
// console.log(decNr);
// console.log(expNr);
// console.log(octNr);
// console.log(hexNr);
// console.log(binNr);
// console.log(binNr2);

//         // BigInt

// let bigNr = 90071992547409920n;
// let intNr = 1;
// let result = bigNr + intNr    // we cannot mix an integer with big integer
// console.log(result)

// const theBiggestInt = 9007199254740991n ;
// const alsoHuge = BigInt(9007199254740991) // 9007199254740991n
// // const hugeString = BigInt("9007199254740991") // 9007199254740991n
// // const hugeHex = BigInt("0x1fffffffffffff") // 9007199254740991n
// // const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111") /
// let myData = BigInt(34534534534534534534534)
// console.log(myData);

// const hugeHex = BigInt("0x1fffffffffffff")
// const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")

// console.log(hugeBin);

//console.log(2 ** 5); // it's a power of any number like *** 2^5 ***
// const expected = 4n / 2n
// // 2n
//       // for more info see MDN documentation
// const truncated = 5n / 2n
// // 2n, not 2.5n
// console.log(expected);
// console.log(truncated);
//console.log(typeof 1n);
// const mixed = [4n, 6, -12n, 10, 4, 0, 0n]
// console.log(mixed.sort());

////            Boolean
// const myString = new String('Hello'); // string object
// const s = Boolean(myString);
// console.log(typeof s);
// console.log(typeof myString);

// let a = !!3 ;       //      type converted into boolean
// console.log(typeof a);
// // similar below example
// let b = Boolean(3)
// console.log(typeof b);  // also type is boolean

// if ([]) {
//   console.log("[] is truthy");
// }
// // if ([] == false) {
// //   console.log("[] == false");
// // }
// if (!![]) {
//     console.log("[] == false");
//   }
// // [] is truthy
// // [] == false

//         outclass MDN documentation
// URL : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

/* 
   Creating Boolean objects with an initial value of false
*/
// const bNoParam = new Boolean();
// const bZero = new Boolean(0);
// const bNull = new Boolean(null);
// const bEmptyString = new Boolean('');
// const bfalse = new Boolean(false);
// console.log(bNoParam)
// console.log(bZero)
// console.log(bNull)
// console.log(bEmptyString)
// console.log(bfalse)

/* 
   Creating Boolean objects with an initial value of true
*/
// const btrue = new Boolean(true);
// const btrueString = new Boolean('true');
// const bfalseString = new Boolean('false');
// const bSuLin = new Boolean('Su Lin');
// const bArrayProto = new Boolean([]);
// const bObjProto = new Boolean({});

//         // Symbol

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);

//           undefined
// function test(t) {
//   if (t === undefined) {
//     return "Undefined value!";
//   }
//   return t;
// }

// let x ; //because value is not assign

// console.log(test(x));

//      null
// let terribleThingToDo = undefined;
// let lastName;
// console.log("Same undefined:", lastName === terribleThingToDo);
// let betterOption = null;
// console.log("Same null:", lastName === betterOption);

// function getVowels(str) {
//    const m = str.match(/[aeiou]/gi);
//    if (m === null) {
//      return 0;
//    }
//    return m.length;
//  }

//  console.log(getVowels('oa'));

// let nr1 = 2;
// let nr2 = "2";
// //console.log(nr1 * nr2);   //   4
// console.log(nr1 + nr2);     // 22  ...it will concatenate
// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);
// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);
// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);
// let nullToNr = null;
// nullToNr = Number(nullToNr);
// console.log("null", nullToNr, typeof nullToNr);

//                   Exercise 2.1

// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// console.log(typeof  str1);
// console.log(typeof str2);
// console.log(typeof val1);
// console.log(typeof val2);
// console.log(typeof myNum)

//            Operators
// unary operators     = increament++ or decreament--
// prefix unary operator = ++increament

//  let nr1 = 4;
//  let nr2 = 5;
//  let nr3 = 2;
//  console.log(nr1++ + ++nr2 * nr3++);
//  //           4++ + 6 * 2 ++
//  console.log('nr1' , nr1)
//  console.log('nr2', nr2);
//  console.log('nr3' , nr3)

//   prefix  ++value
// postfix    value++ (added after ececution)

//      *** Exercise 2.3 ***
/*
Write some code to calculate the hypotenuse of a triangle using the
Pythagorean theorem when given the values of the other two sides. The
theorem specifies that the relation between the sides of a right-angled
triangle is a2 + b2 = c2.
*/

// var prompt = require('prompt-sync')();
// let a = Number(prompt('Enter the base of trianble  = '));
// let b = Number(prompt('Enter the perpendicular of trianble  = '));
// let c ;
// a**= 2 ; 
// b**= 2 ; 
// c**=2 ; 
// c = a + b ; 
// console.log(`The value of hypertaneous square = ${c} `);
// console.log( "value of c is", Math.sqrt(c));

//               Practice Exercise 2.4
// let a = 4 ; 
// let b = 3 ;
// let c = 4 ; 

// a += b ; 
// console.log('Value of "a" before / div' ,a); 
// a /= c;
// c %= b; 
// console.log('Value of "a" after / div' ,a); 
// console.log('new value of "c" after modulus', c);


//    Chapter 2 final project
console.log(' *******   Chapter No# 2 Final project   ********');
console.log(' Miles-to-kilometer converter   ----->>>>');
var prompt = require('prompt-sync')();
let miles = parseInt(prompt('Please enter your miles : '))
let kilometer = miles * 1.60934 ; 
console.log(`The distance of ${kilometer} kms is equal to ${miles} miles`)

// -------------------------------------------------------------------------------------- // 
console.log('\n\t***_____ BMI calculator _____***');
var prompt = require('prompt-sync')();


let heightInInches = Number(prompt('Please enter your height in inches : '));
let height = heightInInches * 2.54 * 10**-2; 
let inputWeight = Number(prompt('Please enter your weight in kilos : ')) ; 
let BMI = inputWeight / (height * height);
console.log(`Your height is ${heightInInches} inches \nYour weight is ${inputWeight} kilo \nYour BMI is ${BMI} kg/m^2 `);










