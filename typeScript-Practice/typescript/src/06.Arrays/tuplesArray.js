"use strict";
// *** ~~~ ___ Tuples ___ ~~~ ***
//sometimes useful to :
// use an array of a fixed size—also known as a "tuple".
/**
 * Tuple arrays have a specific known type at each index
 * that may be more specific than a union
 * type of all possible members of the array.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// * ~ ___ Syntax ___ ~ *
// The syntax to declare a tuple type
// looks like an array literal, but with types in place of element values.
// - - - Example 01
/**
    let yearAndWorrior: [number, string];
    yearAndWorrior = [23, "Halima"];

    yearAndWorrior = [true, " Halima"];
    // Type 'boolean' is not assignable to type 'number
    yearAndWorrior = [34];
    // Type '[number]' is not assignable to type '[number, string]'.
    //   Source has 1 element(s) but target requires 2
 */
// Tuples are often used in JavaScript alongside array destructuring to be able
// to assign multiple values at once
// such as setting two variables to initial
// values based on a single condition.
// - - - Example 01
// year type : numebr
// worrior type : string
let [year, worrior] = Math.random() > 0.5 ? [340, "Aqeel"] : [1928, "Shahzad"];
console.log(year, worrior);
// * ~ __ Tuple Assignability __ ~ *
// Tuple types are treated by TypeScript as more specific than variable length
// array types. That means variable length array types aren’t assignable to
// tuple types.
// Here, although we as humans may see pairLoose as having [boolean,
// number] inside, TypeScript infers it to be the more general (boolean |
// number)[] type:
// Note :
// [boolean,number] is same as (boolean | number)[]
// - - - Example 02
//  Type : (boolean | number)[]
/**
    const pairLoose = [false , 123]

    const pairTupleLoose : [boolean,number] = pairLoose;
    // ~~~~~~~~~~~~~~
    // Error: Type '(number | boolean)[]' is not
    // assignable to type '[boolean, number]'.
    // Target requires 2 element(s) but source may have fewer.

*/
// Tuples of different lengths are also not assignable to each other, as
// TypeScript includes knowing how many members are in the tuple in tuple
// types.
// - - - Example 03
const tuplesThree = [false, 123, "Niazi"];
const tuplesTwoExact = [tuplesThree[0], tuplesThree[1]];
//const tupleTwoExtra  : [boolean , number] = tuplesThree
// ~~~~~~~~~~~~~
// Error: Type '[boolean, number, string]' is
// not assignable to type '[boolean, number]'.
// Source has 3 element(s) but target allows only 2.
// *** ~~~ __ Tuples as rest parameters __ ~~~ ***
// Because tuples are seen as arrays with more specific type information on
// length and element types, they can be particularly useful for storing
// arguments to be passed to a function.
// TypeScript is able to provide accurate type checking for tuples passed as ... rest parameters.
/**
    Here, the logPair function’s parameters are typed string and number.
    Trying to pass in a value of type (string | number)[] as arguments
    wouldn’t be type safe as the contents might not match up: they could both
    be the same type, or one of each type in the wrong order. However, if
    TypeScript knows the value to be a [string, number] tuple, it
    understands the values match up:
*/
// - - - Example 01
function logPair(name, value) {
    console.log(`${name} has ${value}`);
}
const pairArray = ["Amage", 1];
//logPair(...pairArray);
// Error: A spread argument must either have a
// tuple type or be passed to a rest parameter.
// Below is correct for such error :
/**
    function logPair2 (name : string, ...value : (string | number)[]){
        console.log(`${name} has ${value}`)
    }
    logPair2('Hi',...pairArray);

    const pairTupleIncorrect : [number | string] = [1,'Shahzad'];
    // Type '[number, string]' is not assignable to type '[string | number]'.
    logPair(...pairTupleIncorrect);
    // assignable to parameter of type 'string'.
*/
const pairTupleCorrect = ["Dhahzad", 1];
logPair(...pairTupleCorrect);
// Ok
// - - - Example 02
function logTrio(name, value) {
    console.log("====================================");
    console.log(`${name} has ${value[0]} (${value[1]}`);
    console.log("====================================");
}
const trios = [
    ["Aqeel", [1, true]],
    ["Muzammal", [2, false]],
    ["Farooq", [3, true]],
];
trios.forEach((trio) => logTrio(...trio));
// *** ~~~ ___ Tuples Inferences ___ ~~~ ***
// TypeScript generally treats created arrays as variable length arrays,
// not tuples.
/**
 * If it sees an array being used as a variable’s initial value or the
    returned value for a function, then it will assume a flexible size array rather
    than a fixed size tuple.
*/
// - - - Example 01
// The following firstCharAndSize function is inferred as returning
// (string | number)[], not [string, number], because that’s the type
// inferred for its returned array literal:
// return type : (string | number)[]
function firstCharAndSize(input) {
    return [input[0], input.length];
}
// firstChar type : string | number
// size type : string | number
const [firstChar, size] = firstCharAndSize("Gudit");
console.log([firstChar, size]);
// There are two common ways in TypeScript to indicate that a value should
// be a more specific tuple type instead of a general array type: explicit tuple
// types and const assertions.
// ** ~~ __ Explicit typle typles __ ~~ **
// Tuple types may be used in type annotations
// such as the return type annotation for a function.
// If the function is declared as returning a tuple
// type and returns an array literal,
// that array literal will be inferred to be a
// tuple instead of a more general variable-length array.
// - - - Example 01
// Return type: [string, number]
function firstCharAndSizeExplicit(input) {
    return [input[0], input.length];
}
// firstChar type: string
// size type: number
const [firstChar2, size2] = firstCharAndSizeExplicit("Cathay Williams");
console.log([firstChar2, size2]);
// ** ~~ _ Const asserted tuples _ ~~ **
// Typing out tuple types in explicit type annotations can be a pain for the
// same reasons as typing out any explicit type annotations. It’s extra syntax
// for you to write and update as code changes.
// As an alternative, TypeScript provides an as const operator known as a
// const assertion that can be placed after a value.
// Const assertions tell :
// TypeScript to use the most literal, read-only possible form of the value
// If one is placed after an array literal, it will indicate
// that the array should be treated as a tuple:
// - - - Example 01
// Type : (string | number)[]
const unionArray = [1157, "Tomoe"];
// Type : readonly [1157, "Tomoe"]
const readonlyTuple = [1157, "Tomoe2"];
//       OR
// const readonlyTuple = [...unionArray] as const
console.log("====================================");
console.log(readonlyTuple);
console.log("====================================");
/**
    Note that as const assertions go beyond switching from flexible sized
    arrays to fixed size tuples: they also indicate to TypeScript that the tuple is

    read-only and cannot be used in a place that expects it should be allowed to
    modify the value.

*/
// - - - Example 03
/**
 * In this example, pairMutable is allowed to be modified because it has a
    traditional explicit tuple type. However, the as const makes the value not
    assignable to the mutable pairAlsoMutable, and members of the constant
    pairConst are not allowed to be modified:
*/
const pairMutable = [1157, "Tomoe"];
pairMutable[0] = 1257;
console.log("====================================");
console.log(pairMutable);
console.log("====================================");
/**
    const pairAlsoMutable : [number,string] = [23,'kia'] as const
    // The type 'readonly [23, "kia"]' is 'readonly'
    // and cannot be assigned to the mutable type
    // '[number, string]'

    const pairConst= [1157, "Tomoe"] as const;
    pairConst[0] = 1247;

    // Cannot assign to '0' because it is a read-only property

*/
// In practice, read-only tuples are convenient for function returns.
// - - - Example 03
// Return type: readonly [string, number]
function firstCharAndSizeAsConst(input) {
    return [input[0], input.length];
}
// firstChar type: string
// size type: number
const [firstChar3, size3] = firstCharAndSizeAsConst("Ching Shih");
console.log('====================================');
console.log([firstChar3, size3]);
console.log('====================================');
//                NOTE
// Read-only objects and as const assertions are covered more deeply in Chapter 9, “Type
// Modifiers”.
