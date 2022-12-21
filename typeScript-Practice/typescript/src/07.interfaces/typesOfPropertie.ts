//
//  *** ~~~ ___ Types of properties ___ ~~~ ***

import { Settings } from "http2";

// wild and wacky
// JavaScript objects can be wild and wacky in real-world usage
// TypeScript provides a set of type system tools for
// interfaces to help us model that wackiness.

// ** __ Optional properties __ **
// including a ? before the : in its type annotation.
//  - - - Example 01
interface Book {
  author?: string;
  pages: number;
}
const ok: Book = {
  author: "Ibn sina",
  pages: 23,
};

const missing: Book = {
  pages: 2,
};

// ** __ Read Only properties __ **
let name = "AQeel";
interface Page {
  readonly text: "wowww";
}
function read(page: Page) {
  console.log("====================================");
  console.log(page.text);
  console.log("====================================");
  // page.text += "!";
  //Cannot assign to 'text'
  //because it is a read-only property.
}

// ** __ Functions and Methods __ **

// It’s very common in JavaScript for object members to be functions.
// typeScript therefore allows declaring interface members as being the
// function types

// TypeScript provides two ways of declaring interface members as functions:

/**
 * * Mathod syntax : 
    declaring that a member of the interface is a function
    intended to be called as a member of the object, like member(): void
 * * Property syntax :
    Declaring that a member of the interface is equal to a
    standalone function, like member: () => void 
*/

// - - - Example 01
interface HasBothFunctionTypes {
  property: () => string;
  method(): string;
}

const hasBoth: HasBothFunctionTypes = {
  property: () => "",
  method() {
    return "";
  },
};

hasBoth.property(); //ok
hasBoth.method(); //ok

// property and method can also be optional
// - - - Example 02
interface OptionalReadonlyFunc {
  property?: () => string;
  method?(): string;
}

// Method and property declarations can mostly be used interchangeably.

// * Method cannot be declared as randomly
// * property can be declared as randomly
// Interface merging treats them differently

// NOTE
// Use a method function if you know the underlying function may refer
// to this, most commonly for instances of classes
// Use a property function otherwise

// ** __ Call signature __ **

// A call signature looks similar to a function type, but with a :
// colon instead of an => arrow.

// - - - Example 01
/**
 * The following FunctionAlias and CallSignature types both describe the
    same function parameters and return type:
 */

type FunctionAlias = (input: string) => number;
interface CallSignature {
  (input: string): number;
}
// Type: (input: string) => number
const typeFunctionAliases: FunctionAlias = (input) => input.length;
// Type: (input: string) => number
const typeCallSignature: CallSignature = (input) => input.length;

/**
 * Call signatures can be used to describe functions that additionally have
    some user-defined property on them
 */

interface FunctionWothCount {
  count: number;
  (): void;
}
let hasCallCount: FunctionWothCount;

function keepTrackOfCalls() {
  keepTrackOfCalls.count += 1;
  console.log(`I've been called ${keepTrackOfCalls.count} times!`);
}

keepTrackOfCalls.count = 0;

hasCallCount = keepTrackOfCalls;
function doesNotHaveCount() {
  console.log("No idea!");
}
//hasCallCount = doesNotHaveCount;
// Error: Property 'count' is missing in type
// '() => void' but required in type 'FunctionWithCalls'

// ** __ Index Signature __ **

// TypeScript provides a syntax called an index signature to indicate that an
// interface’s objects are allowed to take in any key and give back a certain
// type under that key.

/**
 * An index signature looks like a regular property 
 * definition but with a type after
 * the key, and array brackets surrounding them, 
 * like { [i: string]: ... }.
 */

// - - - Example 01
interface wordCounts {
  [i : string] : number
}

let counts : wordCounts = {};
counts.apple = 0 ; 
counts.banana =  1  ;
// counts.cherry = false;
// Error  :Type 'boolean' is not assignable to type 'number'


// Index signatures are convenient for assigning values to an object
// But aren't completely type safe,
// They indicate that an object should give back a value

interface DateByName {
  [i:string] : Date
}
const publishDates : DateByName = {
  Franke : new Date("1 Jan 1818")
}
publishDates.Franke; // type : Date


// publishDates.Beloved ;
// console.log(publishDates.Belove.toString());
// Runtime error: Cannot read property 'toString'
// of undefined (reading publishDates.Beloved)

/**
 * When possible, if you’re looking to store key-value pairs and the keys
  aren’t known ahead of time, it is generally safer to use a Map. Its .get
  method always returns a type with | undefined to indicate that the key
  might not exist
 */

// ** __ Mixing properties and index sinature __ **

// Interfaces are able to include explicitly named properties and catchall
// string index signatures, with one catch: each named property’s type must
// be assignable to its catchall index signature’s type.

/**
 * You can think of mixing
  them as telling TypeScript that named properties give a more specific type,
  and any other property falls back to the index signature’s type.
 */

// - - - Example 01

// Here, HistoricalNovels declares that all properties are type number, and
// additionally the Oroonoko property must exist to begin with:

interface HistoricalNovels {
  Oroonoko : number;
  [i : string] : number 
}

// ok 
const novels : HistoricalNovels = {
  Outlander : 1991,
  Oroonoko : 1688
}


// const missingOroonoko : HistoricalNovels = {
//   Outlander : 1991,
// }
// Property 'Oroonoko' is missing in 
// type '{ Outlander: number; }' but required in type 

// - - - Example 02
/**
 * Here, ChapterStarts declares that a property under preface must be 0
  and all other properties have the more general number. That means any
  object adhering to ChapterStarts must have a preface property equal to
  0:
 */

interface ChapterStarts {
  preface : 0 ;
  [i : string] : number;
}

const correctPreface : ChapterStarts = {
  preface : 0,
  night : 1,
  shopping : 5
};

// const wrongPreface : ChapterStarts = {
//   preface  :1 , 
//   // Type '1' is not assignable to type '0'.
// }




// ** __ Numeric index signature __ ** 

/**
 * The following MoreNarrowNumbers interface would be allowed because
  string is assignable to string | undefined, but MoreNarrowStrings
  would not because string | undefined is not assignable to string:
 */

// - - -  Example 01

interface MoreNarrowNumbers {
  [i : number] : string;
  [i : string ] : string | undefined
}
//ok
const mixesNumberAbdStrings : MoreNarrowNumbers = {
  0 : '',
  key1 : '',
  key2 : undefined
}

interface MoreNarrowStrings {
 // [i : number] : string | undefined;
  // 'number' index type 'string | undefined' is not assignable to 
  // 'string' index type 'string'
  [i :string] : string
}


// ** __ Nested interfaces __ ** 


/**
 * Just like object types can be nested as properties of other object types,
 * interface types can also have properties that are themselves interface types
  (or object types)
*/

// - - - Example 01


interface Novel {
  author : {
    name : string
  };
  setting: Setting;
}

interface Setting {
  place : string;
  year : number
}

let myNovel : Novel;

myNovel = {
  author : {
    name : 'Jane Austen'
  },
  setting : {
    place : 'England',
    year  : 1812
  }
};

myNovel = {
  author : {
    name: 'Emily Bronte'
  },
  setting : {
    place : 'West Yorkshire',
  //   Property 'year' is missing in type '{ place: string; }' but required in type 'Setting'.ts(2741)
  //   index.ts(300, 3): 'year' is declared here.
    year : 1990
  }
}
























































































































































