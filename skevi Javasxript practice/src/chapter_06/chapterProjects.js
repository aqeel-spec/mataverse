
// ***************** Chapter Projects *************

// *** Create a recursive function ***
// let start = 10 ; 

// // let countUp = function  (val) {
// //     console.log(val);
// //     if ( val < 10 ) {
// //         return countUp (val + 1)
// //     } 
// //     return;
// // }
// // countUp(0)

// function countUp (val) {
//     console.log(val);
//     if ( val < 10 ) {
//         return countUp (val + 1)
//     } 
//     return;
// }
// countUp(0)

//   *** Set TimeOut order *** //

const one = () => console.log('One');
const two = () => console.log('Two');
const three = () => {
    console.log('Three');
    one() ; 
    two();
}
const four = () => {
    console.log('Four');
    setTimeout(one ,0);
    three();
}
four();











