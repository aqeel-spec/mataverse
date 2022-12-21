
// *** ~~~ ___ Casting ___ ~~~ ***

// Casting is the process of overriding a type.

// *** Casting with as
// https://www.w3schools.com/typescript/typescript_casting.php

// A straightforward way to cast a variable is using the as keyword,
//  which will directly change the type of the given variable.


// - - - Example 01
let x : unknown = "hello";
console.log((x as string).length);
//console.log(x.length);// Error : 'x' is of type 'unknown'

// - - - example 02
let x2 : unknown = 4;
console.log((x2 as string).length);
// output : undefined
// Casting doesn't actually change the type of the data within the variable

// TypeScript will still attempt to typecheck casts 
// to prevent casts that don't seem correct, 
// for example the following will throw a type error 
// since TypeScript knows casting a string to a number 
// doesn't makes sense without converting the data:

//  - - - Example 03
// console.log(4 as string).length;
// Error : 
// Conversion of type 'number' to type 'string' 
// may be a mistake because neither type sufficiently 
// overlaps with the other. If this was intentional, 
// convert the expression to 'unknown' first.


// *** Casting with <>
// Using <> works the same as casting with as.

// Example 01

let x3 : unknown = "Hello";
console.log("casting as <> :",(<string>x).length);

// ALERT
// This type of casting will not work with TSX, 
// such as when working on React files.

// *** Force casting

// - - - Example 01
let x4 = "hello";
//console.log(((x4 as unknown) as number).length);
console.log(((x4 as unknown) as number).toFixed);
// return undefined


// ** *** **** Exercise **** *** **
console.log('=======================');

let myVar : unknown = "Hello world";
console.log((myVar as string).length);// method 1
console.log((<string>myVar).length);// method 2
























































