// Named function
function add(x: number, y: number): number {
  return x + y;
}

// Anonymous function
let myAdd1 = function (x: number, y: number): number {
  return x + y;
};

// anonymous function with explicit type
let myAdd2 :  (x : number, y : number) => number = function (
    x : number , y : number
): number {
    return x + y
}

// type value not matter
let myAdd3 :  (baseValue : number, increament : number) => number = function (
    x : number , y : number
): number {
    return x + y
}

// Lambda function
let myAdd4 = (a : number , b : number) => a + b;

// //output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a : string) => void;

function greeter (fn : GreetFunction) {
    // ............
}

























