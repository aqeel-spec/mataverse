// Convert the keys of the object to an array
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };

// // this will print keys of object car
// let arrKeys = Object.keys(car);
// console.log(arrKeys);

// // let by using *** key of Object.keys(car) ***

// for (let key of Object.keys(car)) {
//     console.log(key);
// }

// // // this will print valeus of car objects
// let arrValues = Object.values(car)
// console.log(arrValues);

// ---------------------------------//

let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

// let arrKeys = Object.keys(car);
// for (let i = 0; i < arrKeys.length; i++) {
//   console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// }
// let arrEntries = Object.entries(car);
// console.log(arrEntries);

//  As you can see, it is returning a two-dimensional array, containing key-
//  value pairs. We can loop over it like this:
for (const [key, value] of Object.entries(car)) {
  console.log(key, ":", value);
}
