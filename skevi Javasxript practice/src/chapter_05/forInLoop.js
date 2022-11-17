// *** Loops and objects *** //

/**
 * We can use the for in loop to loop over the object directly,
 * we can convert the object to an array and loop over the array.
 */

// *** for in loop *** //

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };

// for (let prop in car) {
//     // all of names of the property printed
//     //console.log(prop); // This will print all keys of car
//     console.log(car[prop]);
//     // this will print all key values of car
//     // interesting topic
// }

// This for in loop can also be used on arrays, but it is not really useful.
// It will only return the indices, since these are the "keys" of the values of the arrays.

let arr = [] ; 
let createdObj = {
    name : 'Shahzad',
    graduation : 'BS',
    from : 'GCUF'
}

for (let prop in createdObj) {
    console.log(`${prop} := ${createdObj[prop]}`);
    arr.push(`${prop} := ${createdObj[prop]}`)
}
console.log(arr);
for (let propOfArr in arr) {
    console.log(arr[propOfArr]);
}























