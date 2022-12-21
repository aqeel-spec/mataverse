// *** Unions of Object Types ***
/**
    It is reasonable in TypeScript code to want to be able to describe a type that
    can be one or more different object types that have slightly different
    properties.
    Furthermore, your code might want to be able to type narrow
    between those object types based on the value of a property.
 */
//  ** Inferred Object-Type Unions **
// This poem value always has a name property of type string, and may or
//may not have pages and rhymes properties:
// Example 01
/**
const poem =
  Math.random() > 0.5
    ? { name: "Double the Image", pages: 7 }
    : { name: "Her name ", rhymes: true };
console.log(poem.name);
console.log(poem.pages);
console.log(poem.rhymes)
 */
// ** Explicit Object-Type Unions **
/*
    Most notably, if a value’s type is a union of object types,
    TypeScript’s type system will only allow access to properties that exist on
    all of those union types.
*/
// Example 01
/** 
type PoemWithPages = {
  name: string;
  pages: number;
};
type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};
type Poem = PoemWithPages | PoemWithRhymes;
const poem: Poem =
  Math.random() > 0.5
    ? { name: "Aqeel", pages: 7 }
    : { name: "Shhzad", rhymes: true };
console.log(poem.name)
//poem.pages // error
*/
// Restricting access to potentially nonexistent members of objects can be a
// good thing for code safety.

// *** Narrowing Object Types ***

/**
    If the type checker sees that an area of code can only be run if a union typed
    value contains a certain property, 
    In other words, TypeScript’s type
    narrowing will apply to objects if you check their shape in code.
*/

// Example 01
/**
    Continuing the explicitly typed poem example, check whether "pages" in
    poem acts as a type guard for TypeScript to indicate that it is a
    PoemWithPages.
*/
/**
type PoemWithPages = {
  name: string;
  pages: number;
};
type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};
type Poem = PoemWithPages | PoemWithRhymes;
const poem: Poem =
  Math.random() > 0.5
    ? { name: "Aqeel", pages: 7 }
    : { name: "Shhzad", rhymes: true };
if ("rhymes" in poem) {
  console.log(poem.rhymes) // Ok: poem is narrowed to PoemWithPages
} else {
  console.log(poem.pages) // Ok: poem is narrowed to PoemWithRhymes
}
*/

// Example 02
/**
    Note that TypeScript won’t allow truthiness existence checks like if
    (poem.pages). Attempting to access a property of an object that might not
    exist is considered a type error, even if used in a way that seems to behave
    like a type guard:
    if (poem.pages) { ///* ... */ //}
//
//~~~~~
// Property 'pages' does not exist on type 'PoemWithPages | PoemWithRhymes'.
//
//Property 'pages' does not exist on type 'PoemWithRhymes'.

//     *** Discriminated Unions ***
// what shape the object is. This kind of type shape is called a "discriminated union";
// the property whose value indicates the object’s type is a d"iscriminant".
// TypeScript is able to :
//perform "type narrowing" for code that type guards on "discriminant properties".

// Example 01

type PoemWithPages = {
  name: string;
  pages: number;
  type: "pages";
};
type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
  type: "rhymes";
};
type Poem = PoemWithPages | PoemWithRhymes;
const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
if (poem.type === "pages") {
  console.log(`It's got pages: ${poem.pages}`); // Ok
} else {
  console.log(`It rhymes: ${poem.rhymes}`);
}
console.log(poem.name)
//poem.pages;
// ~~~~~~~~~~~
// Error: Property 'pages' does not exist on type 'Poem'.
// Propert
/*
    Discriminated unions are my favorite feature in TypeScript because they
    beautifully combine a common elegant JavaScript pattern with TypeScript’s
    type narrowing. Chapter 10, “Generics” and its associated projects will
    show more around using discriminated unions for generic data operations.
*/
