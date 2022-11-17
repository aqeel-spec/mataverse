// for (initialize variable; condition; statement) {
//     // code to be executed
//     }
// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr.push(i)
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 100; i = i + 2 /**Steps added here */ ) {
//   arr.push(i);
// }
// console.log(arr);

// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

// console.log(str);

/**
 * Optional for expressions
    All three expressions in the head of the for loop are optional. 
    For example, it is not required to use the initialization block to initialize variables:
 * 
 * 
 */

// let i = 0;
// for (; i < 9; i++) {
//   console.log(i);
//   // more statements
// }

/**
 * *** condition *** part is also optional.
 * If you are omitting this expression,
 * you must make sure to break the loop in the body in order to not create an infinite loop.
 *
 */

// for (let i = 0; ; i++) {
//   console.log(i);
//   if (i > 3) break;
//   // more statements
// }

/**
 * You can also omit all three expressions. Again, make sure to use a break
 * statement to end the loop and also modify (increase) a variable,
 * so that the condition for the break statement is true at some point.
 */
// let i = 0;

// for (;;) {
//   if (i > 3) break;
//   console.log(i);
//   i++;
// }

/**
 *However, in the case where you are not fully using all three expression positions 
 — especially if you are not declaring variables with the first expression but mutating 
 something in the upper scope — consider using a while loop instead, which makes the intention clearer. 
*/

// let i = 0;

// while (i <= 3) {
//   console.log(i);
//   i++;
// }

/*  ***Lexical declarations in the initialization block is scoped to the for loop***  */
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 10000);
// }

/*
 *However, if the variable is defined in the upper scope:
 */

// let i = 0;
// for (; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// Output : 3 times 3,3,3

//       ***Why ? ****

/**
 * It logs 3, 3, and 3. The reason is that each setTimeout creates a new closure that closes over the i variable,
 * but if the i is not scoped to the loop body, all closures will reference the same variable
 * when they eventually get called — and due to the asynchronous nature of setTimeout,
 * it will happen after the loop has already exited,
 * causing the value of i in all queued callbacks' bodies to have the value of 3.
 */

/**
 * This also happens if you use a var statement as the initialization, because
 * variables declared with var are only function-scoped, but not lexically scoped
 * (i.e. they can't be scoped to the loop body).
 */

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// Logs 3, 3, 3

/*  *-----> Using for with two iterating variables <--- */
// const arr = [1, 2, 3, 4, 5, 6];
// for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
//   console.log(arr[l], arr[r]);
// }
// // 1 6
// // 2 5
// // 3 4

//  *** Exercise 5.3 *** 
let myWork = [] ; 
for (let i = 1 ; i < 11 ; i++){
    let status = i % 2 ? true : false ; 
   // console.log('Lesson',i);
    let Lesson = {
        name : `Lesson ${i}`,
        status : status
    }
    myWork.push(Lesson)
}
console.log(myWork);


























