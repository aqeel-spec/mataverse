// Any

import { domainToUnicode } from "url";

let myVal : any;

myVal = "Oye kia ho rha h";
myVal = 42;
myVal = "hey!";
myVal = [];
myVal = {};
myVal = Math.random;
myVal = undefined;
myVal = null;
myVal = () => {console.log('Hey again!'); };


// unknown
let val : unknown;
const val1 : unknown = val;
const val2 : any = val;
const val3 : boolean = val;
const val4 : number = val;
const val5 : string = val;
const val6 : Record<string, any> = val;
const val7 : any[] = val;
const val8 : (...args : any[]) => void = val;


// Never 
// Function returning never must not have a reachable end point

function error (message : string) : never {
    throw new Error(message)
}

// inferred return type is never
function fail () {
    return error ("something failed")
}

function infiiniteLoop () : never {
    while (true) {}
}




















