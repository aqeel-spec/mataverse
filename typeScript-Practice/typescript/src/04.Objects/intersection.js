"use strict";
// **** Intersection Types ****
Object.defineProperty(exports, "__esModule", { value: true });
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
