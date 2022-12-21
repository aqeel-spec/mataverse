const a = 5;// const a: 5 
// literal type when use const
// const a: 5
let b = 4;
// let b: number
console.log(typeof a);
const c = "best";

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
    let x = 4;
}else {
    let z = "string"
}
console.log("let :" + z);// Cannot find name 'z'.
// Error : z is not defined in this scope
