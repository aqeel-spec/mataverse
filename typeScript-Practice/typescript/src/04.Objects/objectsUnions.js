"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const poem = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
if (poem.type === "pages") {
    console.log(`It's got pages: ${poem.pages}`); // Ok
}
else {
    console.log(`It rhymes: ${poem.rhymes}`);
}
console.log(poem.name);
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
