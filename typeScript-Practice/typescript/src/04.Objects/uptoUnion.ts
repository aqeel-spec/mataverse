// Chapter 4 **Objects**

import { type } from "os";

// interface Person {
//     name : string,
//     age : number
// }

// function greet(person : Person) {
//     return 'Hello' + person.name
// }
//greet('');
// interface Person {
//   name: string;
//   age: number;
// }

// function greet(person: Person) {
//   return "Hello " + person.name;
// }
// //greet();

// ***** Declaring Object TYpes *****
//        Example 01
/**
function greet (person :{name : string , age : number} ) {
  return 'Hello' + person.name
}
//        Example 02
// Object types using variables
let poetLetter : {
  born : number,
  name : string
}
poetLetter = {
  name : 'Aqeel',
  born : 2002
}
// Object can also be used with *Interface*
//        Example 03
interface Person {
  name : string ;
  age : number
}
function greet1 (person : Person){
  return 'Hello' + person.name
} 
*/

// ** aliases Objects **
//        Example 01
// aliased used with work type
/**
 * type keyWord (equal=) {...properties}
 */
/*
type Person = {
  name : string,
  age : number
}
function greet (person : Person) {
  return "Hello" + person.name
}
// we can also used it as a variable
// Example 02
type Details = {
  name : string,
  ph : number
}
let personDetails : Details;
personDetails = {
  name : 'shahzad',
  ph : 0
}
*/

// *** optional property (?) ***
/**
interface person {
  name? :'aqeel',
  ph : number
}
 */

// readonly property (readonly)
/** 
interface Person {
  name : string;
  age : number;
}
interface ReadonlyPerson {
  readonly name : string;
  readonly age : number ;
}
let writablePeron : Person = {
  name : 'aqeel',
  age : 0
}
let readonlyPerson : ReadonlyPerson = writablePeron
console.log(readonlyPerson.name);
console.log(readonlyPerson.age)
writablePeron.age++;
console.log(readonlyPerson.age)
*/
// it works amazing

// *** index sinature ***
// Sometimes you don’t know all the names of a type’s properties ahead
// we have to know the shape of the values.
// In those cases we use an index signature
// interface StringArray  {
//   [index : number] : string
// }
// const myArr : StringArray = getStringArray()// func not inplement
// const secondItem = myArr[1]
// console.log(secondItem)

// *** Entending types ***
/*
interface Person {
  name : string , 
  age : number
}
interface fullDetail extends Person {
  ph : number
}
let personDetails : fullDetail = {
  name : 'aqeel',
  age : 0,
  ph : 0
}
console.log(personDetails.ph)
*/
// Now all properties exists on fullDetail
//The extends keyword on an interface allows us to effectively copy
//members from other named types, and add whatever new members we want.
// Example 02 //
/*
interface Person {
  name : string , 
  age : number
}
interface PersonJob {
  location : string;
  city : string

}
// we can extend more properties with saperator(,)
interface fullDetail extends Person,PersonJob {
  ph : number
}
let personDetails : fullDetail = {
  name : 'aqeel',
  age : 0,
  ph : 0,
  location : 'Pakitan',
  city : 'Lahore'
}
console.log(personDetails.ph);
console.log(personDetails.city)
*/
// exnteds properties also called *** Union property ***

// *** intersection types ***
// interface Person1 {
//   name : string
// }
// interface Person1Address {
//   address : string,
//   ph : string
// }
// type  Person = Person1 & Person1Address {}

// *** structural typing ***
// we can access type of aliases what type is being used
/*
type WithFirstName = {
  firstName : string
}
type WithLastName = {
  secondName : number
}
const hasBoth = {
  firstName : 'Lukis',
  secondName : 0
}
let withFirstName : WithFirstName = hasBoth;
let withLastName : WithLastName  = hasBoth ;
*/
// typescript is structural typed
/**
 * Structural typing not the same as duck typing, which comes from the phrase
 * “If it looks like a duck and quacks like a duck, it’s probably a duck.”
 */

/**
 * 1)Structural typing is when there is a static system checking the type—in
     TypeScript’s case, the type checker.
 * 2)Duck typing is when nothing checks object types until they’re used at
   runtime.
 * 
 * Note :JavaScript is duck typed whereas TypeScript is structurally typed.
**/

// *** Usage checking ***

/**
 * When providing a value to a location annotated with an object type,
  TypeScript will check that the value is assignable to that object type. To
  start, the value must have the object type’s required properties. If any
  member required on the object type is missing in the object, TypeScript will
  issue a type error.
**/
//       Example 01
/**
type BothName = {
  fName : string ; 
  lName : string
}
const hasBoth : BothName = {
  fName : 'Aqeel',
  lName : 'Shahzad',
}
const hasOne : BothName = {
  fName : 'Aqeel',
}
// Error 
//Property 'lName' is missing in type '{ fName: string; }' but required in type 'BothName'
**/
//     Example 02
/**
type TimeRange = {
  start: Date;
};
const hasStartString: TimeRange = {
   start: "1879-02-13",
// Error: Type 'string' is not assignable to type 'Date'.
};
*/

// *** Excess Property Checking ***
/**
 * typeScript will report a type error if :
 * a variable is declared with an object type
 * and its initial value has more fields than its type describes
 */
// Example 01
/**
type Person = {
  name : string;
  age : number;
}
// ok
let createdPerson : Person = {
  name : 'Aqeel',
  age : 23
}
// not ok
let createdPerson2 : Person = {
  name : 'Aqeel',
  age : 23,
  address : '...Kha k ho'
}
*/
// Example 02
//having an extra property:


// *** Nested Object Types ***
/*
type Auther = {
  fName : string;
  lNmae : string
}
type Poem = {
  author : Auther;
  name : string
}
const poemMismatch : Poem = {
  author: {
    fName: "",
    lNmae: ""
  },
  name: ""
}
*/

// *** Optional (?) Properties ***
// Example 01
/**
type History = {
  location : string,
  ticket? : number
}
const place : History = {
  location : 'Lahore'
}
console.log(place.location)
// fine and working
*/
/**
  Keep in mind there is a difference between optional properties and
  properties whose type happens to include undefined in a type union. A
  property declared as optional with ? is allowed to not exist. A property
  declared as required and | undefined must exist, even if the value is
  undefined.
*/
























