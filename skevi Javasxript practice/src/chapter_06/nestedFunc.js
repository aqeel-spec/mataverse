//functions inside functions this phenomenon is called nested
//functions:

// function doOuterFunctionStuff(nr) {
//   console.log("Outer function");
//   doInnerFunctionStuff(nr);
//   function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log("I can access outer variables:", nr);
//   }
// }
// doOuterFunctionStuff(2);

// *** Exercise 6.7 ***

let start = 10;
function countDown1(value) {
  console.log(value);
  if (value < 1) {
    return countDown1;
  }
  countDown1(value - 1);
}
countDown1(start);

function countDown2(value) {
  console.log(value);
  if (value > 0) {
    value-- ; 
    return countDown2(value);
  }
  return;
 
}
countDown2(start);

// let start = 10;
// function loop1(val) {
//   console.log(val);
//   if (val < 1) {
//     return;
//   }
//   return loop1(val - 1);
// }
// loop1(start);
// function loop2(val) {
//   console.log(val);
//   if (val > 0) {
//     val--;
//     return loop2(val);
//   }
//   return;
// }
// loop2(start);
