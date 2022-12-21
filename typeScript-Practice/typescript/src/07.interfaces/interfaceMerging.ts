//
// *** ~~~ ___ Interface merging ___ ~~~ ***

// One of the important features of interfaces is their
// ability to merge with each other.

// Interface merging means if two interfaces are declared in the
// same scope with the same name, they’ll join into one bigger interface under
// that name with all declared fields.

// - - - Example 01

// This snippet declares a Merged interface with two properties: fromFirst
// and fromSecond:

interface Merged {
  fromFirst: string;
}
interface Merged {
  fromSecond: string;
}

// Equivalent to:
/**
    interface Merged {
    fromFirst: string;
    fromSecond: number;
    }
*/

// Interface merging isn’t a feature used very often
// in day-to-day TypeScript development.
// I would recommend avoiding it when possible,
// as it can be difficult to understand code where an
// interface is declared in multiple places.

//    NOTE
/**
    * However, interface merging is particularly useful for augmenting interfaces
    from external packages or built-in global interfaces such as Window.
 */

// - - - Example 02

// For example:
// when using the default TypeScript compiler options, declaring a
// Window interface in a file with a myEnvironmentVariable property makes
// a window.myEnvironmentVariable available:


interface Window {
  myEnvironmentVariable: string;
}
//window.myEnvironmentVariable; // Type: string



// I’ll cover type definitions more deeply in Chapter 11, “Declaration Files”
// and TypeScript global type options in Chapter 13, “Configuration Options”.


// 
// ** __ Member Naming Conflict __ **
// Note that merged interfaces may not declare the same name of a property
// multiple times with different types. If a property is already declared in an
// interface, a later merged interface must use the same type.

// In this MergedProperties interface, the same property is allowed because
// it is the same in both declarations, but different is an error for being a
// different type:

// - - - Example 01

interface MergedProp {
    same : (input : boolean) => string;
    different : (input : string) => string
}

interface MergedProp {
    same : (input : boolean) => string;
    //different : (input :number) => string
    // Error: Subsequent property declarations must have the same type.
    // Property 'different' must be of type '(input: string) => string',
    // but here has type '(input: number) => string'
}

// note : for method above example will be ok
// Merged interfaces may, however, define a method with the same name and
// a different signature. Doing so creates a function overload for the method.

interface MergedMeth {
    different(input : string) : string
}
interface MergedMeth {
    different(input : number) : string 
}
























