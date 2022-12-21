// *** ~~~ More function types ~~~ ***

/**
   There are two more "return" types : 
   * 1) Void
   * 2) Never
*/

// ** ~~~ Void  ~~~ **

// "Typescript" allow us to use "Void 'keyword' " to the return type
// of function that return nothing

/**
 * Some functions aren’t meant to return any value.
 * They either have no return statements
 * or only have return statements that don’t return a value.
 */

// NOTE :
//Functions whose return type is void may not return a value.

// --- Example 01

/**
function logSong (song : string | undefined): void {
   if(!song) {
      return;
   }
   console.log(`${song}`);
   return true
   // // Error: Type 'boolean' is not assignable to type 'void'.
}
*/

// Example 02
// * void can be useful as the return type in a function type declaration.
// * void indicates that any returned value
//   from the function would be ignored.

// --- Example 02
let songLogger: (song: string) => void;

songLogger = (song) => {
  console.log(`${song}`);
};
songLogger("Heart of glass");
// Output : Heart of glass

/** Vippppppppppppppppp
   Note that although JavaScript functions all return undefined by default if
   no real value is returned, void is not the same as undefined. void means
   the return type of a function will be ignored, while undefined is a literal
   value to be returned. Trying to assign a value of type void to a value whose
   type instead includes undefined is a type error:
 */

//   - - - Example 03
function returnsVoid() {
  return;
}
let lazyValue: string | undefined;
//lazyValue = returnsVoid
// Type '() => void' is not assignable to type 'string'

/**
   The distinction between undefined and void returns is particularly useful
   for ignoring any returned value from a function passed to a location whose
   type is declared as returning void. For example, the built-in forEach
   method on arrays takes in a callback that returns void. Functions provided
   to forEach can return any value they want. records.push(record) in the
   following saveRecords function returns a number (the returned value froman array’s .push()), yet is still allowed to be the returned value for the
   arrow function passed to newRecords.forEach:
*/

// - - - Example 04

const records: string[] = [];
function saveRecords(newRecords: string[]) {
  newRecords.forEach((record) => records.push(record));
}
saveRecords(["21", "Come on over", "The bodyGaurd"]);
console.log(records);

// Output : [ '21', 'Come on over', 'The bodyGaurd' ]
// The void type is not JavaScript.
// It’s a TypeScript keyword used to declare return types of functions.

/**
   "Remember", it’s an indication that a function’s
   returned value isn’t meant to be used, not a value that can itself be returned.
*/

// *** ~~~ Never Returns ~~~ ***

/**
 * Never-returning functions are those that always throw an error
 * or run an infinite loop (hopefully intentionally!).
 */

/**
 * If a function is meant to never return, adding an explicit : never type
 * never type annotation indicates that any
 * code after a call to that function won’t run.
 */

/**
   This fail function only ever throws an error, so it can help TypeScript’s
   control flow analysis with type narrowing param to string:
 */

function fail(message: string): never {
  throw new Error(`Invatiant failure ${message}`);
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== "string") {
    fail(`param should be a string, not ${typeof param}`);
  }
  // Here, param is known to be type string
  param.toUpperCase(); // Ok
}
workWithUnsafeParam('Hello');
/**
    NOTE : 
   never is not the same as void :  
   * void is for a function that returns nothing. 
   * never is for a function that never returns.
 */










