"use strict";
// *** ~~~ ___ Spread and rest operators ___ ~~~ ***
Object.defineProperty(exports, "__esModule", { value: true });
// Remember ... rest parameters for functions from Chapter 5, “Functions”?
// Rest parameters and array spreading, both with the ... operator,
// ** ~~ _ Spreads _ ~~ **
// Arrays can be joined together using the ... spread operator.
// TypeScript understands the result array will contain values that can be from either of
// the input arrays.
/**
    Here, the conjoined array is known to contain both values that are type
    string and values that are type number, so its type is inferred to be
    (string | number)[]:
 */
// - - - Example 01
// Type : string[]
const solidiers = ["Harry", "John", "Kml"];
// Type : number
const solidiersAges = [34, 45, 56];
// Type : (string | number)[]
const conjoined = [...solidiers, ...solidiersAges];
console.log(conjoined);
// ** ~~ __ Spreading rest operator __ ~~ ***
/**
 * Arrays used as :
    arguments for rest parameters must have the same array type as the rest
    parameter.
 * We can spread array :
    1) if joinning array is string then spreading also be string
    2) if number then join array also be number
 */
/**
    function logWorriors(greeting: string, ...names: string[]) {
    for (const name of names) {
        console.log(`${greeting}, ${name}!`);
    }
    }
    const worriors = ["harry", "marry", "sharry", "cherry"];

    console.log("====================================");
    console.log("====================================");
    console.log(logWorriors("Hello", ...worriors));
    console.log("====================================");

    const birtYears = [1994, 1945, 1930, 1995];
    logWorriors("Born in : ", ...birtYears);
    // number array is not assignable "string[]";
    // Error: Argument of type 'number' is not
    // assignable to parameter of type 'string'.
 */
// - - - Example 02
function logWorriors(greeting, ...names) {
    for (const name of names) {
        console.log(`${greeting}, ${name}!`);
    }
}
const worriors = ["harry", "marry", "sharry", "cherry"];
console.log("====================================");
console.log("====================================");
console.log(logWorriors("Hello", ...worriors));
console.log("====================================");
const birtYears = [1994, 1945, 1930, 1995];
logWorriors("Born in : ", ...birtYears);
// number array is not assignable "string[]";
// Error: Argument of type 'number' is not
// assignable to parameter of type 'string'.
