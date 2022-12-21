// 
// *** ~~~ ___ Interfaces ___ ~~~ ***

// interfaces are most commonly used for better performance 
// ___ Topic #01
//            ** __ Type aliases Verses Interfaces __ **

// aliased based onject types 

// - - - Example 01
type Poet1 = {
    born : number;
    name : string
}

// interface object types
interface Poet2 {
    born : number;
    name : string
}

// these two syntaxes almost same except =
/**
 *                        TIP
    TypeScript developers who prefer semicolons generally put them after type aliases and not after
    interfaces. This preference mirrors the difference between declaring a variable with a ; versus
    declaring a class or function without.
*/

// - - - EXample 02
let valueLater1 : Poet1 ;

valueLater1 = {// aliased based object
    born : 1925,
    name : "AQeel",
}


let valueLater2 : Poet2 ;

valueLater2 = {// interface based object
    born : 1925,
    name : "AQeel",
}
//valueLater1 = "Emily water";
// Error : Type 'string' is not assignable to type 'Poet1'.

valueLater2 = {
    born : 1990 , // true,
    // Type 'boolean' is not assignable to type 'number'
    name : 'Sophie',
}

//        NOTE
/**
    Difference b/w interfaces and type aliases
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    |interfaces (interface {})                   |  aliases (type = {})                      |
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    1) interfaces can "merge" together to be     |
    augmented (a feature) particularly useful    |
    when working with 3rd party code such as :   |
       * build-in globals                        |
       * npm packages                            |
    2)interfaces can be used to type check the   |2) Cannot be used to type check the structure 
    structure of class declarations.             |of class declarations.
    3)Interfaces are generally speeder for the   |3)Dynamic copy-and-paste of a few object literal
    typescript type checker to work with:        |the way type aliases do.
    "They declare name type that can be catched  |
    more easily" .                               |
    4) Interfaces consider as names Objects.     |4)Alises : Unnamed object literal
    5)An interface can only describe objects     |5)while a type is more flexible
      type StringOrNumber = string | number; // not possible with interface
    6)An interface can be extended,              | while a type cannot. 
    7) component can extend its interface.       |
    // - - - Example                             |
    interface Dog extends Animal {               |
        tailShape: string;                       |
        owner: string;                           |
    }                                            |
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    the key distinction is that a type cannot be re-opened to add new properties 
    vs an interface which is always extendable.
*/









