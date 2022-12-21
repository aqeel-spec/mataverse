// These two interfaces are completely
// transferrable in a structural type system:

interface Ball {
  diameter: number;
}

interface Sphere {
  diameter: number;
}

let ball: Ball = {
  diameter: 34,
};
let sphere: Sphere = {
  diameter: 80,
};
sphere = ball;
ball = sphere;

// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.

interface Tube {
  diameter: number;
  length: number;
}
let tube: Tube = {
  diameter: 12,
  length: 3,
};
ball = tube;

// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.

// TypeScript is comparing each member in the type against
// each other to verify their equality.

//===================================================
// Now lets do it Case By Case


//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 

let myType = {name : "Aqeel",id : 1};

// case 1
myType = {id : 2 , name : "tom"};

console.log(myType);


// case2

// myType = {id : 2 , name_person : " wla wlwa"};// Error

// case3
// myType = {id : 2, name : "extra prop" , age : 34}// Error


//=================================================

let myType2 = {id : 2 , name : "Tom"};

// case1a
myType = myType2// both have same prop.

// case 2a
let myType3 = {id : 3, name_person : "wa"};
//myType = myType3;// Error : different prop.


// case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x = y;// Ok, `fullname` matched by index signature


// case 3

var myType4 = {id : 2 , name : "Tom", age : 22};

myType = myType4;

//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object














































