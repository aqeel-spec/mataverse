"use strict";
// *** ~~~ Function Overloads ~~~ ***
/**
    Some JavaScript functions are able to be called with drastically different
    sets of parameters that can’t be represented just by optional and/or rest
    parameters. These functions can be described with a TypeScript syntax
    called "overload signatures":

    declaring different versions of the function’s
    name, parameters, and return types multiple times before one final
    implementation signature and the body of the function.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createDate(monthOrTimestamp, day, year) {
    return day === undefined || year === undefined
        ? new Date(monthOrTimestamp)
        : new Date(year, monthOrTimestamp, day);
}
createDate(554356800); // Ok
createDate(7, 27, 1987); // Ok
//createDate(4, 1);
/**
    The previous code snippet’s function would compile to roughly the
    following JavaScript:
    function createDate(monthOrTimestamp, day, year) {
    return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
    }
 */
/**
    No overload expects 2 arguments,
    but overloads do exist that expect either 1 or 3 arguments.


    Overload signatures, as with other type system syntaxes, are erased when
    compiling TypeScript to output JavaScript.
 */
/**
    WARNING
    Function overloads are generally used as a last resort for complex, difficult-to-describe function
    types. It’s generally better to keep functions simple and avoid using function overloads when
    possible.
 */
// ** ~~ Call-Signature Compatibility ~~ **
/**
 * The implementation signature used for an overloaded function’s
    implementation
 * function’s implementation uses for parameter
    types and return type.
 */
/**
 * This format function’s implementation signature declares its first
    parameter to be a string.
 * While the first two overload signatures are
    compatible for also being type string, the third overload signature’s () =>
    string type is not compatible:
*/
// - - - Example 01
// function format(data: string): string; // Ok
// function format(data: string, needle: string, haystack: string): string; // Ok
// function format(getData: () => string): string;
// // ~~~~~~
// // This overload signature is not compatible with its implementation
// console.log(format('kuch ni'))
// - - - Example 02
function format(data, needle, haystack) {
    return needle && haystack ? data.replace(needle, haystack) : data;
}
console.log(format('6/12/2022'));
