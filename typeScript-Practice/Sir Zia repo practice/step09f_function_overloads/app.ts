//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific



function add (arg1 : string, arg2 : string) : string
function add (arg1 : number, arg2 : number) : number;
function add (arg1 : boolean, arg2 : boolean) : boolean;


// this is not the part of the overload list
// so it has only three overloads

function add (arg1 : any, arg2 : any) : any {
    return arg1 + arg2
}

//Calling 'add' with any other parameter types would cause an error except for the three options

console.log(add(1,2));// 4
console.log(add("Hello","World"));// HelloWorld
console.log("boolean : ",add(true,false));//1 ?


