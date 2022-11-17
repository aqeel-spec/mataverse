// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   names[i] = "hello " + names[i];
// }
// console.log(names);
/**
 * The possibilities are endless here. When an array comes in somewhere in
    the application, data can be sent to the database per value. Data can be
    modified by value, or even filtered, like this:
 */

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith("Ja")) {
//     delete names[i];
//     continue;
//   }
//   names[i] = "hello " + names[i];
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   names.push("...");
// }

// *** Exercise 5.5 ***
let grid = [];

let noOfCells = 64;
let counter = 0;
let rowArray = [];

for (let i = 1; i <= noOfCells + 1; i++) {
  let noOfColms = 5;
  if (counter % 8) {
    if (rowArray[i] === undefined) {
      console.log("row is complete");
    } else {
      grid.push(rowArray);
    }
    console.log(
      "It has already been added to the grid by the inner if statement."
    );
  }

  counter++;
  let tempArray = counter;
  rowArray.push(tempArray);

  if (counter[i] === noOfColms) {
    grid.push(counter[i]);
  }
}
grid.push(rowArray);
console.log(grid);
console.log(rowArray);
