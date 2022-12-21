// simple function

import { timeStamp } from "console";

// *** required parameters
function hello (name : string) {
    console.log(`Hello ${name}`);
    
}
hello("hello")

// *** optional parameters  "? : " 

function optionalPara (name:string, aka? :string) {
    console.log(`Hello, ${name} and ${aka}`)
}
optionalPara("Hello");

// *** default parameters
function defaultPara ( name = "Alxender" ) {
    console.log(`Hello, ${name}`);
    
}
defaultPara("Sir Imran");// unction defaultPara(name?: string): void
// value can also be overwritten

// *** rest parameters

// array type
// use only one in one function

function restPara (name = "Alexnder", ...nickNames : string[]){
    console.log(`Hello ${name} aka ${nickNames}`);
    
}
restPara("Imran","Alexender","Alex","Alexender the great");


// *** return types

// implicit return type
// implicit : // typescript uderstand by own what type of value is 
function returnType (name = "Alxender") {
    return name
}
returnType();

// explicit return type
// rxplicit : we are own describing the type

function returnTypeExplicit (name = "Alexender") : string {
    return name
}
returnTypeExplicit();

// *** function types

let imranName1 : () => string // arrow function returning string
// function type will always be in arrow format
let imranName : (name : string , nickName? : string) => string

const nickNames = ["Alexender","Alex","Alexender the great"];

function allNicknames (callback : (index : number) => string ) {
    for (let i = 0 ; i < nickNames.length; i++) {
        console.log(callback(i));
        
    }
}
function getNameAt (index : number) {
    return `${nickNames[index]}`
}
allNicknames(getNameAt);

// - - -  Example 02

let returnStringOrNumber : () => string | number;
returnStringOrNumber = function () : number {return 7};
returnStringOrNumber = function () : string {return "7"};
// returnStringOrNumber = 7 // function expected
// case :  (() => string) | number
// NOTE
// () => string  or Only number
// very confusing above point
let returnStringOrNumber2 : () => (string | number) // ya ok h
// either string or number

// - - - example 02
let returnStringOrNumber3 : (() => string) | number;
//returnStringOrNumber3 = function () : number {return 7};
returnStringOrNumber3 = function () : string {return "7"};
returnStringOrNumber3 = 7;  // exp 1 , 2sa blkl mkhtlf h

// - - - example 03
let returnStringOrNumber4 : (() => string | number) | number;
returnStringOrNumber4 = function () : number {return 7};
returnStringOrNumber4 = function () : string {return "7"};
returnStringOrNumber4 = 7;  
// all is ok
// - - - Example 
let aboutImran : (name : string) => number
aboutImran = (name : string) => {
    return 7
} 

// type interface
let imran :( name : string) => string

imran = (name) => `HELLO ${name.toUpperCase()}`

// function overload

// new Date(timestamp)
// new Date(year,day,month)
function createDate(timestamp : number) : Date;
function createDate(day : number, month : number,year  :number): Date;
function createDate(dayOrTimestamp : number, month? : number, year ?: number) {
    return month === undefined || year === undefined
    ?  new Date(dayOrTimestamp)
    : new Date(year,month,dayOrTimestamp)
}
createDate(7);
























