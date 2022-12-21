

function applyDiscount (price : number, discount : number = 0.05) {
    return price * (1 - discount)
}
console.log(applyDiscount(100))


// cannot give default value in function type "definition"
//let promotion : (price : number, discount : number = 0.05) => number

// A parameter initializer is only allowed in a 
// function or constructor implementation.



//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)

function buildName (fName : string, lName = "Khan"): string {
    if (lName)
       return fName + " " + lName
    else
       return fName
}
let result1 = buildName("Bob");// works
let result2 = buildName("bob","Adam");// also works
//let result3 = buildName("bob","adam", "SIR"); // Error


// anonymous function type with default parameters
//(Note that the parameter type will be optional when used with defult value)

let buildName1 : (fName : string, lName? :string) => string = 
function (fName : string, lName="Khan"): string {
    if (fName)
       return fName + " " + lName
    else 
      return fName
}
































