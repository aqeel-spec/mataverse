"use strict";
// *** __Chapter 06
//            *** ~~~___ Arrays ___ ~~~ ***
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Arrays and tuples
 * One flexible and one fixed
 * Choose your adventure
 */
//JavaScript arrays are wildly flexible and can
//hold any mixture of values inside:
/**
// - - - Example 01 (Javascript example)
    const elements = [true , null , undefined , 42]
    elements.push('even',['more']);
    // value of element : [ true, null, undefined, 42, 'even', [ 'more' ] ]

 */
// adding different value in array would cause a
// problem for readers
/**
    TypeScript respects the best practice of keeping to one data type per array
    by remembering what type of data is initially inside an array, and only
    allowing the array to operate on that kind of data.
 */
// - - - Example 02
const worriors = ["America", "Bondica"];
worriors.push("newVal");
//worriors.push(true); // Error
// line 34 error because :
// initially our array is string wo whole array type is
// string but in case error we are trying to assign a
// value boolean "which cause error"
//emoji array : ["✌","😂","😝","😁","😱","🎈","🌹","🎀","🔫","👄","🚲","🍉","💛","💚"]
//    "🌹","🎀"  __ *** Array types  *** __ "🎀","🌹"
// array did't have initial value
// the variable can start of undefined and later recieve value
// - - - Example 01
let arr;
arr = [1, 2, 3, 4, 1022];
console.log(arr);
/*
 *NOTE :
  Array types can also be written in a syntax like Array<number> called class generics.

  * Most developers prefer the simpler number[].
 */
// ** ~~ Array and function types ~~ **
//                             // ["✌","😂","😝","😁",null,true,undefined ]
/**
    Array types are an example of a syntax container where function types may
    need parentheses to distinguish what’s in the function type or not.
    Parentheses may be used to indicate which part of an annotation is the
    function return or the surrounding array type.
    The createStrings type here, which is a function type, is not the same as
    stringCreators, which is an array type:
 */
let createStrings;
// Type is a function that returns an array of strings
let stringCreators;
// Type is an array of functions that each return a string
// *** ~~~ Union-type array ~~~ ***
/**
    You can use a union type to indicate that each element of an array can be
    one of multiple select types.

    Using parentheses in array union types is important
    —the following two types are not the same:
 */
let stringOrArrayOfNumbers;
// Type is either a number or an array of strings
let arrayOfStringsOrNumbers;
// Type is an array of elements that are each either a number or a string
// only number are array but string is not an array
stringOrArrayOfNumbers = [2, 4];
arrayOfStringsOrNumbers = ["Hello", 23];
// string as well as number are in an array
// Type is (string | undefined)[]
const namesMaybe = ["Aqualtune", "Blenda", undefined];
// ** ~~ Evolving Any Arrays ~~ **
/**
  *  If you don’t include a type annotation on a variable initially set to an empty
    array, TypeScript will treat the array as evolving any[],
  *  meaning it can receive any content.
  * As with evolving any variables, we don’t like evolving  any[] array
 */
// type : any[]
let values = [];
// type : string
values.push('oye hoye');
// type : number
values[0] = 0;
console.log(values);
// TypeScript works best when it knows what types your values are meant to be.
// *** ~~~ Multidimensional Arrays ~~~ ***
// A 2D array, or an array of arrays, will have two "[]";
let arrayOfArraysOfNumber;
arrayOfArraysOfNumber = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9]
];
// A 3D array, or an array of arrays of arrays, will have three “[]”s.
// 4D arrays have four “[]”s.
// 5D arrays have five “[]”s.
// You can guess where this is going for 6D arrays and beyond.
// Type: number[][]
let arrayOfArraysOfNumbers;
