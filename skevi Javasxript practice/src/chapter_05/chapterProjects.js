/**Math multiplication table */


//       *** Practice exercise ***
let fmT = [] ; 
let value = 11 ; 

ourter : for (let i = 0 ; i < value ; i++) {
    let temp = [];
    inner : for (let j = 0 ; j < value ; j++) {
        temp.push(i * j);
    }
    fmT.push(temp);
}
console.table(fmT);




