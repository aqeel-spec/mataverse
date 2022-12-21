let imranNames : () => string[];
imranNames= () => ["Imran","Alexander"];

// we have functions inside array which returning string
let functionArray  : (() => string)[];
functionArray = [() => "Alexander",() => "Alexander2"]

// Union type array
let imranData : (string | number)[];
imranData = ["Imran",34];

// Involving any 
let data = [];// let data: any[]
data.push("Alaxeder");

typeof data;// let data: string[]
data[1] = 7;
typeof data;// let data: (string | number)[] 
// alerting situation

// *** Nested array
const numberOfStudentsBatch1 : number[] = [200,400,40,900];
// explicitly assign data
const totalNumberOfStudents : number[][] = [
    [400,700,800,900,600],
    [1400,1700,1800,1900,1600]
];
// demensions will depends upon no of "[][][]"; 3d array
const nickNames : string[] = ["Imran","Alexander"];
let favName = nickNames[1];

// - - - Example 8
const studentsData : (string | number)[]= [1,"Ali"];
let student = studentsData[1];

// *** spread and rest operator
const nickNames2 : string[] = ["Imran","Alexander"];
const numbers : number[] = [1,2];
// spread operator
const combined = [...nickNames2,...numbers];

// rest operator | rest parameter
function logNames (greeting : string, ...nicknames3 : string[]){
    for (const name of nicknames3){
        console.log('====================================');
        console.log(`${greeting} , ${name}`);
        console.log('====================================');
    }
}
//logNames("Hello","imran","Alex","Alexander","Muzammal");
logNames("Hi", ...nickNames)
// 
function logName2 (greeting : string , ...nicknames4 : (string  | number)[]) {
    for (const name of nicknames4) {
        console.log('====================================');
        console.log(`${greeting}, ${name}`);
        console.log('====================================');
    }
}
const numberArray  :number[] = [1,2,3,4];
logName2("Hi Sir",...numberArray);

// *** tuples   // not in javascript


// work just like an array;
// known number of array && types
// elemests type collection of predefined types
// predefined length and index 

let imranDataTuples : [number,string];
imranDataTuples = [7,"Alexander"];
//                         Type 'undefined' is not assignable to type 'string'
// imranDataTuples = [true,undefined]
//                  Type 'boolean' is not assignable to type 'number'
let imranDataArray  :(number | string)[];
imranDataArray = ["Alexander",7,90,34,"Sir Imran"];

// - - - Example 02
let [preference , name, inCountry] = 
  Math.random() > 0.5 ? [1,"imran", true] : [2,"imran", false];
















































































































































































































































































