// These two interfaces are completely
// transferrable in a structural type system:
let ball = {
    diameter: 34,
};
let sphere = {
    diameter: 80,
};
sphere = ball;
ball = sphere;
let tube = {
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
let myType = { name: "Aqeel", id: 1 };
// case 1
myType = { id: 2, name: "tom" };
console.log(myType);
export {};
