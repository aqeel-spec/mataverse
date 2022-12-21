// simple function
// *** required parameters
function hello(name) {
    console.log(`Hello ${name}`);
}
hello("hello");
// *** optional parameters  "? : " 
function optionalPara(name, aka) {
    console.log(`Hello, ${name} and ${aka}`);
}
optionalPara("Hello");
// *** default parameters
function defaultPara(name = "Alxender") {
    console.log(`Hello, ${name}`);
}
defaultPara("Sir Imran"); // unction defaultPara(name?: string): void
// value can also be overwritten
// *** rest parameters
// array type
// use only one in one function
function restPara(name = "Alexnder", ...nickNames) {
    console.log(`Hello ${name} aka ${nickNames}`);
}
restPara("Imran", "Alexender", "Alex", "Alexender the great");
// *** return types
// implicit return type
// implicit : // typescript uderstand by own what type of value is 
function returnType(name = "Alxender") {
    return name;
}
returnType();
// explicit return type
// rxplicit : we are own describing the type
function returnTypeExplicit(name = "Alexender") {
    return name;
}
returnTypeExplicit();
// *** function types
let imranName1; // arrow function returning string
// function type will always be in arrow format
let imranName;
const nickNames = ["Alexender", "Alex", "Alexender the great"];
function allNicknames(callback) {
    for (let i = 0; i < nickNames.length; i++) {
        console.log(callback(i));
    }
}
function getNameAt(index) {
    return `${nickNames[index]}`;
}
allNicknames(getNameAt);
export {};
