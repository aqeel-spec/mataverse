// *** ~~~ ___ Arrays ___ ~~~ ***
// I have listed out 20 methods 
// that you need to know, with fun emojis.
// *** 1. indexOf()
// Every array element has an index. 
// This method returns the index of an element in an array.
// a. If specific element doesn’t exist within array, indexOf() returns -1.
// Hence, this method can be used to check whether an element exists in an array or not.
// * syntax
const array = [1, 2, 3, 4, 5, 6];
console.log(array.indexOf(6));
// *** 2. lastIndexOf()
// This method returns an array’s last element’s index.
/**
 * a. If an array is empty then, it returns -1
 * . If an array has one more same element,
 * then it returns the maximum index of duplicate items.
*/
// *** syntax
// array.lastIndexOf(element)
console.log("last index : ", array.lastIndexOf(9));
// *** 3. concat()
// *** 4. join()
/**
 * According to the name, this method joins all elements
 * of the array into a string with a given operator.
   
  If an operator is not given, it joins elements with a comma(,).
 *
    syntax:
    array.join(operator)
*/
// *** 5. push()
// *** 6. pop()
// *** 7. reverse()
// *** 8. shift()
// *** 9. unshift()
// *** 10. slice()
// *** 11. splice()
// *** 12. toString()
// *** 13. filter()
// *** 14. map()
// *** 15. every()
// *** 16. reduceRight()
// This method applies a function simultaneously against two values 
// of the array (from right to left) to reduce it to a single value.
let number = [1, 2, 3, 4, 4];
let result = number.reduceRight(function (a, b) {
    return a + b;
});
console.log("Result : ", result);
// *** 17. reduce()
// This method behaves the exact opposite of the reduceRight() method.
// It applies a function simultaneously against two values 
// of the array (from left to right) to reduce it to a 
// single value.
let numberM = [20, 5, 10];
let result2 = numberM.reduce((a, b) => {
    return a - b;
});
console.log("Result2 of reduce : ", result2);
// *** 18. some()
// This method is generally used for testing purposes.
// i.e. To know whether at least a single item from an array 
// is fulfilling a given condition or not.
let numbers = [1, 3, 8];
console.log(numbers.some(item => item % 2 == 0));
// true
// at least one number is even
// *** 19. sort()
// *** 20. fill()
// This method changes all elements in an array to a static value,
// from a start index (default 0) to an end index 
// (default array.length) and returns the modified array.
// a. It can add new elements to specific(multiple) positions
console.log(number);
console.log("result1 : ", number.fill(1, 2, 5));
console.log("result1 : ", number.fill(1, 1));
console.log("result1 : ", number.fill(1));
export {};
