// book page 233
// let s = "Hello";
// console.log(
//   s
//     .concat(" there!")
//     .toUpperCase()
//     .replace("THERE", "you")
//     .concat(" You're amazing!")
// );
// Output :  HELLO you! You're amazing!

// *** Global method *** pg = 235
// let x = 7 ;
// console.log(Number.isNaN(x));
// // true when not a number
// // here is in case :
// // Output : "false"
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encode_uri = encodeURI(uri);
// console.log('Encoded URI',encode_uri);
// let decode_uri = decodeURI(encode_uri);
// console.log('Decode_uri',decode_uri)
// console.time()

// ouTput :
// Encoded URI https://www.example.com/submit?name=maaike%20van%20putten
// Decode_uri https://www.example.com/submit?name=maaike van putten

/**
 * This is great for fixing broken URIs, but it's actually a bit useless whenever
    you need to encode strings that contain any of these characters: / , ? :
    @ & = + $ # . These can be used in URIs as part of the URI and aretherefore skipped. This is where the next two built-in methods come in
    handy.
*/

// *** decodeUriComponent() and encodeUriComponent() ***

// let uri = 'https://www.example.com/submit?name=this&that=some thing&code=love';
// let encode = encodeURI(uri)
// console.log(encode);

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

// *** Exercise 8.1 *** //
// let uri = "How's it going?"
// let encode = encodeURIComponent(uri);
// let decode = decodeURIComponent(uri);
// let webUri = "http://www.basescripts.com?=Hello World";

// console.log('encode : ',encode);
// console.log(decode);
// console.log(encodeURIComponent(webUri));

// *** Making integers with "parseInt()" ***

// let str_float = "6.9";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);
// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);

// pg = 241
// arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(arr.copyWithin(0, 3, 9));

// *** Exercise 8.2 ***

// const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence"];
// const arr2 = arr.filter((value, index, array) => {
//   console.log(value, index, array.indexOf(value));
//   return array.indexOf(value) === index;
// });
// console.log(arr2);

// *** Exercise 8.3 *** //

// let arrNum = [1,2,3,4,5,6,7,8];
// let arrNum2 = arrNum.map((arr) => {
//     return arr * 2
// })
// console.log(arrNum2);
// let arrNum3 = arrNum.map(arr => arr * 2);
// console.log(arrNum3);

// *** Converting a string to an array *** pg = 253
// **** split() ****
// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry+watermelon+grapefruit";
// let arr_fruits = favoriteFruits.split("+");
// console.log(arr_fruits);

// // *** Converting an array to a string *** pg = 254
// // **** Join() ****
// let letters = ['a','b','c'];
// let x = letters.join('');
// console.log(x);

// *** Creating substrings *** /
// With the slice(start, end) method we can create substrings.
// This does not alter the original string, but returns a new string with the substring.
// It takes two parameters, the first is the index at which it starts and the second
//is the end index.
// you leave out the second index it will just continue untilthe end of the string from the start.
// The end index is not included in the substring.
// *** Example *** //
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0, 3);
// console.log("1:", substr1);
// console.log("2:", substr2);

// *** Exercise 8.4 *** //

/** 
let word = "thIs will be capiTalized for each word";
function titleCase(string) {
  let data = string.toLowerCase();
  let arr = [];
  let dataArr = data.split(" ");
  dataArr.forEach(element => {
     let convertedWord = element.slice(0,1).toUpperCase() + element.slice(1);
     arr.push(convertedWord)
  });
  return arr.join(' ')
}
console.log(titleCase(word));
*/

// *** Exercise 8.5 *** // pg -= 262

/** 
let word = "thIs will be capiTalized for each word";
let data = word.toLowerCase();
let arr = ['a','e','i','o','u'];
arr.forEach((element , index ) => {
    console.log(element);
    word = word.replaceAll(element , index);

})
console.log(word);
*/


// *** Checking if something is (not) a number***
// return number but sees string
// let str1 = "5";
// console.log(isNaN(str1));
// Reason : 
// Some funky stuff is going on here, even though 5 is between quotation
//marks, JavaScript still sees that it's a 5 and it will log false

// *** Exercise 8.6 *** //
/** 
let pi = Math.PI;
let x = 5.7 ; 
let ranNum = Math.floor((Math.random() * 100) + 1);

console.log('pi : ',pi);
console.log(x,'Math.Ceil : ',Math.ceil(x));
console.log(x,'Math.floor :',Math.floor(x));
console.log(x,'Math.round',Math.round(x));
console.log('Randon Number :',ranNum);

function ranNumGenerator (min , max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let index = 0; index < 100; index++) {
  console.log(ranNumGenerator(1,100));
  
}
*/

// *** Date Methods *** // pg = 274
// There are different ways to create a date.
//One way to create dates is by using the different constructors.
// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now = Date.now() ; 
// console.log(now);

// let oldDate = new Date(1000);
// console.log(oldDate);

// let stringDate = new Date("Sat Jun 05 2023 12:40:12 GMT+0200");
// console.log(stringDate);

// let d = new Date();
// console.log('current day :',d.getDay());
// console.log('Current month :',d.getMonth() + 1);
// console.log('current year :', d.getFullYear());
// console.log('Current hours :',d.getHours());
// console.log('Current minutes :', d.getMinutes() );
// console.log('Seconds :',d.getSeconds());
// console.log('MilliSeconds :',d.getMilliseconds());
// console.log('Time : ',d.getTime());

// let d = new Date();
// d.setFullYear(2000)
// console.log(d);

// *** Converting a date to a string *** //
// let d = new Date();
// console.log(d.toDateString());
// // output : Wed Nov 16 2022
// console.log(d.toLocaleDateString());
// output : 11/16/2022

// *** Exercise 8.7 **** // 
let d = new Date() ; 
d.setFullYear(2030)
console.log(d);
let arr = ["January", "February", "March", "April", "May","June","July","August","September","October","November","December"]
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
let mydate = `${arr[month-1]} ${day} ${year}`;
console.log(mydate);




































































