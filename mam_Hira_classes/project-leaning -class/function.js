// function coffeeOrder (drink) {
//     return `Your ${drink} is on the way`
// }
// const order = coffeeOrder('Xhayee')
// console.log(order);

// Practice exercise 6.3

const value1 = 1 ;
const value2 = 2 ; 
let operator = '-' ; 
function calculator(a  ,b , c) {
    if (c === '-'){
        return (a - b);
    }else {
        return (a + b)
    }
}
// calculator(value1 , value2, operator) 

// exercise 6.4 
const array = [] ; 
for (let i = 0; i < 10; i++) {
    let value1 = i * 5 ;
    let value2 = i * i ; 
    let result = calculator(value1 , value2)
    array.push(result)
    
}
console.log(array)
