// **** Intersection Types ****

// combine all properties "Only 1-times of repeating property"

// Example 01
/**
type ArtWork = {
     genre : string;
     name : string
};
type Writing = {
    name : string;
    pages : number
}
type WrittenArt = ArtWork & Writing
// Equivalent to:
// {
//     genre: string;
//     name: string;
//     pages: number;
// }
*/

/**
    Intersection types can be combined with union types, which is sometimes
    useful to describe discriminated unions in one type
*/
//   Example 02
/**
type ShortPoem = { author: string } & (
  | { kigo: string; type: "haiku" }
  | { meter: number; type: "villanelle" }
);
// it's ok
const morningGlory: ShortPoem = {
  author: "Fukuda Chiyo-ni",
  kigo: "Morning Glory",
  type: "haiku",
};
const oneArt: ShortPoem = {
  author: "Elizabeth Bishop",
  type: "villanelle",
 //  meter : 3 missing that's why it's showing error
};
// Error: Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
//
// Type '{ author: string; type: "villanelle"; }' is not assignable to
// //
// type '{ author: string; } & { meter: number; type: "villanelle"; }'.
// //
// Property 'meter' is missing in type '{ author: string; type:
// "villanelle"; }'
// //
// but required in type '{ meter: number; type: "villanelle"; }'.
*/

// *** Dangers of Intersection Types ***

/**
    Intersection types are a useful concept, but it’s easy to use them in ways that
    confuse either yourself or the TypeScript compiler. I recommend trying to
    keep code as simple as possible when using them.
*/

// ** Long assignability errors **

/**
    Assignability error messages from TypeScript get much harder to read when
    you create complex intersection types, such as one combined with a union
    type. This will be a common theme with TypeScript’s type system (and
    typed programming languages in general): the more complex you get, the
    harder it will be to understand messages from the type checker.
*/

// Example 01
/**
type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: "haiku" };
type Villanelle = ShortPoemBase & { meter: number; type: "villanelle" };
type ShortPoem = Haiku | Villanelle;
const oneArt: ShortPoem = {
  author: "Elizabeth Bishop",
  type: "villanelle",
};
*/

// Type '{ author: string; type: "villanelle"; }'
// is not assignable to type 'ShortPoem'.
//
// Type '{ author: string; type: "villanelle"; }'
// //
// is not assignable to type 'Villanelle'.
// //
// Property 'meter' is missing in type
// //
// '{ author: string; type: "villanelle"; }'
// //
// but required in type '{ meter: number; type: "villanelle"; }'.

/**
    In the case of the previous code snippet’s ShortPoem, it would be much
    more readable to split the type into a series of aliased object types to allow
    TypeScript to print those names:
*/

// *** ~~ never ~~ *** 
/*
    Primitive types cannot be joined together as constituents in an
    intersection type because it’s impossible for a value to be multipleprimitives at the same time. Trying to & two primitive types together will
    result in the never type, represented by the keyword never:
*/

type NotPossible = number & string;
// Type: never
/**
    In the case of the previous code snippet’s ShortPoem, 
    it would be much more readable to split the type into a series of aliased object types 
    to allow TypeScript to print those names:
*/

//No types can be provided to a location whose type is a bottom type:
//A bottom type is one that can have no possible values and can’t be reached. 
/**
    let notNumber: NotPossible = 0;
    // ~~~~~~~~~
    // Error: Type 'number' is not assignable to type 'never'.
    let notString: never = "";
    // ~~~~~~~~~
    // Error: Type 'string' is not assignable to type 'never'.
*/
// Most TypeScript projects rarely—if ever—use the never type. It comes up
// once in a while to represent impossible states in code. Most of the time,
// though, it’s likely to be a mistake from misusing intersection types. I’ll
// cover it more in Chapter 15, “Type Operations”.











