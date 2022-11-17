/**
 * In some cases, you want to call the same function from inside the function.
 * It can be a beautiful solution to rather complex problems
 * here are some things to keep in mind though.
 */

// function getRecursive(nr) {
//   console.log(nr);
//   getRecursive(--nr);
// }
// getRecursive(3);

// function getRecursive(nr) {
//   console.log(nr);
//   if (nr > 0) {
//     getRecursive(--nr);
//   }
// }
// getRecursive(3);
// This function is going to call itself until the value of the parameter is no
// longer bigger than 0 . And then it stops.

// function logRecursive(nr) {
//   console.log("Started function:", nr);
//   if (nr > 0) {
//     logRecursive(nr - 1);
//   } else {
//     console.log("done with recursion");
//   }
//   console.log("Ended function:", nr);
// }
// logRecursive(3);
// Recursive functions can be great in some contexts.
// When you feel the need
//to call the same function over and over again in a loop, you should probably
//consider recursion.


//    ***  Exercise 6.6 *** //
function calFac(para) {
  if (para === 0) {
    return 1;
  } else {
    return para * calFac(--para);
  }
}
console.log(calFac(5));