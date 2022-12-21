// *** ~~~ __ Arrays Members __ ~~~ ***

// TypeScript understands typical index-based access for retrieving members
// This defenders array is of type string[], so defender is a string:

const defenders = ["Clarena", "Dina"];

// Type : string
const defender = defenders[0];
// Members of union typed arrays are themselves that same union type.

// - - - Example 01
// Here, soldiersOrDates is of type (string | Date)[], so the
// soldierOrDate variable is of type string | Date:
const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
// Type: Date | string
const soldierOrDate = soldiersOrDates[0];

// *** ~~ _ Caveat: Unsound Members _ ~~ ***
// The TypeScript type system is known to be technically unsound:
/**
    it can get
    types mostly right, but sometimes its understanding about the types of
    values may be incorrect. Arrays in particular are a source of unsoundness in
    the type system. By default, TypeScript assumes all array member accesses
    return a member of that array, even though in JavaScript, accessing an array
    element with an index greater than the array’s length gives undefined.
 */

function withElements(elements: string[]) {
  console.log(elements[9001].length);
}
withElements(["it's", "over"]);
// We as readers can deduce that it’ll crash at runtime with “Cannot read
// property 'length' of undefined”,
// But :
/**
    TypeScript intentionally does
    not make sure retrieved array members exist. It sees elements[9001] in
    the code snippet as being type string, not undefined.
    

 */

// TypeScript does have a --noUncheckedIndexedAccess flag that makes array lookups more
// restricted and type safe
// but it’s quite strict and most projects don’t use it
