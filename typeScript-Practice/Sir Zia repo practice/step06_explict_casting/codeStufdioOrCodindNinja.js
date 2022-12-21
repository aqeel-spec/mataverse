// *** ~~~ ___ Type Casting in TypeScript ___ ~~~ ***
// website link : https://www.codingninjas.com/codestudio/library/type-casting-in-typescript
/**
 * Typecasting, commonly known as type conversion,
 * is a technique for transforming one type into another in TypeScript.
 * It exists in Object-oriented programming
 *  but it does not exist in JavaScript.
 *
 *
 * the typescript programming language, which compiles to JavaScript,
 * has the idea of casting.
 *
 *
 *  JavaScript have dynamic types,
 * there is no concept of type casting in Javascript.
 *
 * // Definition :
 * Converting a variable from one type to another is possible
 * with type casting in Typescript.
*/
// ** Syntax of Type casting in Typescript
// There are two types of syntax for type casting.
// 1) let A: number = (<string> B).length;
// 2) let A: number = (B as string).length;
/** Why is type casting in typescript needed? */
/**
 * For instance -
   1) A number and a string are concatenated in type casting.
   2) For formatting and display, type casting converts arrays of numbers to strings.
*/
// w3 school examples those are perfect for understanding
// - - - Example 01
// JS code
// let a : typeA ;
// let b = a as typeB;
// - - - Example 01
// Type Casting a string type to a number using ‘as’
let flower = "Rose";
let stringLength = flower.length;
console.log(stringLength);
// **Type casting: Using the <> Operator
// Type Casting a string type to a number using ’<>’
console.log("=======================");
let flower2 = "MarryGold";
let stringLength2 = flower2.length;
console.log(stringLength2);
// - - - Example 02
// Type Casting a number type to a string using ’as’
let stringLength3 = 22;
let flower3 = stringLength3;
console.log('The length of the string is: ', flower3);
export {};
/**
2. In TypeScript, how does the casting method work?

    Ans: Typescript is a typed language that improves the
    development experience, which is why it is preferred over
    Javascript. It mainly enhances the user experience by
    detecting and correcting mistakes before the developer
    begins deploying code.
*/
