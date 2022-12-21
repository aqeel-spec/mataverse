// 
// *** ~~~ ___ Interface extensions ___ ~~~ ***

/**
 * Sometimes you may end up with multiple interfaces that look similar to
    each other. One interface may contain all the same members of another
    interface, with a few extras added on.
 * TypeScript allows an interface to extend another interface,
*/

// TypeScript allows an interface to extend another interface, which declares it
// as copying all the members of another. An interface may be marked as
// extending another interface by adding the extends keyword after its name

// followed by the name of the interface to extend
// (the “base” interface). Doing so indicates to TypeScript that all objects
// adhering to the derived interface must also have all the members of the base
// interface.

//  - - - Example 01

// In the following example, the Novella interface extends from Writing and
// thus requires objects to have at least both Novella’s pages and Writing’s
// title members:

interface Writing {
    title : string
}
interface Novella extends Writing {
    pages : number
}

let myNovells : Novella = {
    title : "Ethon frome",
    pages : 3
}

/**
    let missingPages : Novella = {
        title : "The amazing",
        // Property 'pages' is missing in type '{ title: string; }' 
        // but required in type 'Novella'.
    }

    let extraProperty : Novella = {
        title : "The rah e ishq",
        pages : 34,
        stratey : "baseline",
    //     Type '{ title: string; pages: number; stratey: string; }' 
    //     is not assignable to type 'Novella'.
    //    Object literal may only specify known properties,
    //    and 'stratey' does not exist in type 'Novella'.
    }
*/

// Interface extensions are a nifty way(اچھا طریقہ) to represent that one type of entity in
// your project is a superset (it includes all the members of) another entity.
// They allow you to avoid having to type out the same code repeatedly across
// multiple interfaces to represent that relationship.

// 
// ** __ Overridden properties __ **

/**
 * Derived interfaces may override, or replace, properties from their base
   interface by declaring the property again with a different type.
*/
// TypeScript’s
// type checker will enforce that an overridden property must be assignable to
// its base property.

// It does so to ensure that instances of the derived interface
// type stay assignable to the base interface type

interface WithNUllableName {
    name : string | null
}

interface WithNonNullableName extends WithNUllableName {
    name : string
}

// Error : 
/**
interface WithNumericName extends WithNUllableName {
    name : number | string
// 'WithNumericName' is declared but never used.ts(6196)
// Interface 'WithNumericName' incorrectly extends interface 'WithNUllableName'.
// Types of property 'name' are incompatible.
// Type 'string | number' is not assignable to type 'string | null'.
// Type 'number' is not assignable to type 'string'.ts(2430)
}
*/

// 
// ** __ Entending multiple interfaces __ **

/**
 * Interfaces in TypeScript are allowed to be declared as extending multiple
   other interfaces.
*/

// we can extends more then 2 properties of interfaces
// by using commas (,) 
// Look at below example will clear your doubts

// - - - Example 01


interface GivesNumber {
    giveNumber() : number
}
interface GivesString {
    giveString() : string
}

interface GiveBothAndEither extends GivesString,GivesNumber {
    giveEither() : number | string
}

function useGiveBoth (instance : GiveBothAndEither) {
    instance.giveString();// Type : string
    instance.giveNumber();// type : number
    instance.giveEither();// type : number | string
}

// By marking an interface as extending multiple other interfaces, you can
// both reduce code duplication and make it easier for object shapes to be
// reused across different areas of code.



























































































