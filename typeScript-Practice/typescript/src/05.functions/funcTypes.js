"use strict";
// *** ~~~ Function types ~~~ ***
// JavaScript allows us to pass functions around as values
// That means we :
// need a way to declare the type of a parameter or variable
// meant to hold a function.
Object.defineProperty(exports, "__esModule", { value: true });
/**
    Function type syntax looks similar to an arrow function, but with a type
    instead of the body.
    This nothingInGivesString variable’s type describes a function with no
    parameters and a returned string value:
*/
// --- Example 01
let nothingInGivesString;
/**
    This inputAndOutput variable’s type describes a function with a
   * string[] parameter,
   * an optional count parameter,
   * and a returned number value:
*/
// --- Example 02
let inputAndOutput;
// "Function types" are frequently used to describe callback parameters
// (parameters meant to be called as functions).
const songs = ["Juice", "Shake It Off", "What's Up"];
function runOnSong(getSongAt) {
    for (let i = 0; i < songs.length; i += 1) {
        console.log(getSongAt(i));
    }
}
function getSongAt(index) {
    return `${songs[index]}`;
}
runOnSong(getSongAt); // ok
function logSong(song) {
    return `${song}`;
}
//           X
//runOnSong(logSong);// not ok
// When complaining that two function types aren’t assignable to each other,
//TypeScript will :
//typically give three levels of detail, with increasing levels of specificity:
/**
    1.The first indentation level prints out the two function types.
    2. The next indentation level specifies which part is mismatched.
    3. The last indentation level is the precise assignability complaint of the
    mismatched part.

*/
// *** ~~~ Function Type Parentheses ~~~ ***
/**
    Function types may be placed anywhere that another type would be used.
    That includes union types.

    In union types, parentheses :
    may be used to indicate which part of an
    annotation is the function return or the surrounding union type:
*/
//      --- Example 01
// Type is a function that returns a union: string | undefined
let returnStringOrUndefined;
// Type is either undefined or a function that returns a string
let maybeReturnString;
// *** ~~~ Parameter Type Inferences (قیاس آرائیاں) ~~~ ***
// cumbersome : بوجھل
//       --- Example 01
let singer;
singer = function (song) {
    // type of song : string
    return `Singing ${song.toUpperCase()}`;
};
console.log('Singing this song :', singer('Siyaaa wa'));
/**
   * Functions passed as arguments to parameters with function parameter types
    will have their parameter types inferred as well.

    inferred : اندازہ لگایا

    * For example, the song and index parameters here are inferred by
      TypeScript to be string and number, respectively:
*/
//     --- Example 02
// in this example typescript inferred type
// song : string
// index : number
const song = ['call me', 'Jolene', 'The chain'];
song.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
});
let stringToNumber;
stringToNumber = (input) => input.length; // OK
function usesNumberToString(numberToString) {
    console.log(`The string is : ${numberToString(1234)}`);
}
usesNumberToString((input) => `${input}! Hooray!`);
// usesNumberToString((input) => input * 2);
//                  ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'string'.
