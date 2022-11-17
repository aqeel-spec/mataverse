// *** Nested Loop *** //

/**
 * loop inside a loop   ---> Nested
 * 1. Often it is not the best solution to the problem.
 * 2. It could even be a sign of poorly written code
 * 3. (sometimes called "code smell" among programmers)
 */

// while (condition) {
//   // code that gets executed as long as condition 1 is true
//   // this loop depends on condition 1 being true
//   while (condition) {
//     // code that gets executed as long as condition 2 is true
//   }
// }

/**
 * Nested loop can be used to create array of arrays
 * With the outer loop, we create the top-level array,
 * and with the inner loop we add the values to the array.
 * It is mainly used to print or visualize table, matrix, pattern, or multidimensional array.
 * Usage of memory is less.
 * Suitable when the number of iterations is more in a program.
 *
 */

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//     arrOfArrays.push([]);
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//     }
// }
// //console.log(arrOfArrays);
// console.table(arrOfArrays)

// *** Exercise 5.4 ***

let myTable = [];
let noRows = 11;
let noColmn = 10;

let counter = 0;
for (let i = 1; i <= noRows; i++) {
  let tempTable = [i];
  counter++;
  for (let j = 1; j <= noColmn; j++) {
    counter[j];
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}
console.table(myTable);

// var x, y, chr;
// for (x = 1; x <= 6; x++) {
//   for (y = 1; y < x; y++) {
//     chr = chr + "*";
//   }
//   console.log(chr);
//   chr = "";
// }
// let star;
// for (let i = -5; i <= 0; i++) {
//   star = "";
//   for (let j = -5; j <= i; j++) {
//     star +=  "*";
//   }
//   console.log(star);
// }
