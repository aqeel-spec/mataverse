let myName;
myName = null;
console.log(myName);
myName = "Aqeel";
console.log(myName);
//myName = undefined ;// Error : Type 'undefined' is not assignable to type 'string | null'.
//myName = 34;// Error;
// Example 02
let myAge;
myAge = 23;
console.log(myAge);
myAge = "Don't know";
console.log(myAge);
// Example 03
console.log(myAge.toString());
console.log(myAge.toUpperCase());
let newAge = Math.random() > 0.5 ? "khan" : 60;
if (newAge === "khan") {
    console.log(newAge.toUpperCase());
}
if (typeof newAge === "string") {
    console.log(newAge.toUpperCase());
}
typeof newAge === "string"
    ? console.log(newAge.toUpperCase())
    : console.log(newAge.toFixed(2));
let age;
age = 90;
age = "died";
age = "unknown";
let zia;
zia = "zia";
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    console.log(yourName.toUpperCase());
}
console.log(yourName?.toUpperCase()); // also works
;
let data;
export {};
