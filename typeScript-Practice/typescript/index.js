"use strict";
//
//  *** ~~~ ___ Types of properties ___ ~~~ ***
Object.defineProperty(exports, "__esModule", { value: true });
const ok = {
    author: "Ibn sina",
    pages: 23,
};
const missing = {
    pages: 2,
};
// ** __ Read Only properties __ **
let name = "AQeel";
function read(page) {
    console.log("====================================");
    console.log(page.text);
    console.log("====================================");
    // page.text += "!";
    //Cannot assign to 'text'
    //because it is a read-only property.
}
const hasBoth = {
    property: () => "",
    method() {
        return "";
    },
};
hasBoth.property(); //ok
hasBoth.method(); //ok
// Type: (input: string) => number
const typeFunctionAliases = (input) => input.length;
// Type: (input: string) => number
const typeCallSignature = (input) => input.length;
let hasCallCount;
function keepTrackOfCalls() {
    keepTrackOfCalls.count += 1;
    console.log(`I've been called ${keepTrackOfCalls.count} times!`);
}
keepTrackOfCalls.count = 0;
hasCallCount = keepTrackOfCalls;
function doesNotHaveCount() {
    console.log("No idea!");
}
let counts = {};
counts.apple = 0;
counts.banana = 1;
const publishDates = {
    Franke: new Date("1 Jan 1818")
};
publishDates.Franke; // type : Date
publishDates.Beloved;
console.log(publishDates.Belove.toString());
