// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);



//    exercise 3.1
/* 
let glossory = ['Milk' , 'Bread' , 'Apples'] ; 
console.log(glossory.length);
glossory[1] = 'Bananas';
console.log(glossory);
*/

// favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");
// let lenthOfFavouriteFruits = favoriteFruits.push('LIME');
// console.log(favoriteFruits);

// arr8 = [ 2, 6, 7, 8 ];
// let findValue = arr8.find(function(e) { return e === 6});let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, findValue2);

//   Exercise 3.2
// let shopping = [] ;
// shopping.push('Milk' ,'Bread', 'Apples')
// console.log(shopping);
// shopping.splice(1,1,'Bananas','eggs' )
// console.log(shopping);
// shopping.pop();
// console.log(shopping);
// shopping.sort();
// console.log('sorted array',shopping);
// console.log(shopping.indexOf('Milk'));
// console.log(shopping);
// shopping.splice(0,0,'Carrot', 'Lettuce');
// console.log('adding 2 more items',shopping);
// let shapes = ['Juice', 'Pop'];
// let arr =  shopping.concat(shapes,shapes)
// console.log(arr);
// console.log(shopping.pop());

// Exercise 3.3
// let arr = [1,2,3];
// let arr1 = [arr,arr,arr];
// console.log(arr1[1][1]);

//-----------------------------
// let arr = [];
// console.log(typeof arr);
//////// Objects

//  const dog = {
//     name : 'Kamali',
//     age : 23,
//     status : true
//  }

//  console.log(dog);
//  dog['color'] = 'Brown'
//  console.log(dog);
//  dog.speed = 123;
//  console.log(dog);

//-------------------------
//         Exercise 3.4
// let myCar = {
//     make : 'Shahzad',
//     model : 2022,
//     value : true,
//     color : 'green',
//     forSale : 'yes'
// }
// variable = 'color';
// console.log(myCar[variable]);
// variable1 = 'forSale';
// console.log(myCar[variable1]);
// console.log(myCar.make , myCar.model);
// console.log(myCar.forSale);

// let company = {
//   companyName: "Healthy Candy",
//   activity: "food manufacturing",
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };
// console.log(company.address.zipcode = '33117');
// let addresses = [
//   {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas",
//   },
// ];
// let streetName = addresses[0].street
// console.log(streetName);


// let people = {
//     friends : [],
//     friend1 : {
//         fName : 'Aqeel',
//         lName : 'Shazhad',
//         id : 'PIAIC76659'
//     },
//     friend2 : {
//         fName : 'Aqeel',
//         lName : 'Shazhad',
//         id : 'PIAIC766'
//     },
//     friend3 : {
//         fName : 'Aqeel',
//         lName : 'Shazhad',
//         id : 'PIAIC7667'
//     },
// }
// people.friends.push(people.friend1, people.friend2 , people.friend3);
// console.log(people.friends);


//          chapter projects


// Manipulating an array
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined]
// theList.shift()
// theList.pop();
// theList.unshift('FIRST')
// theList.splice(4,1,'hello world')
// theList.splice(3,1,'MIDDLE');
// theList.push('LAST');
// console.log(theList);

// let storeItems = [];
// product1 =  {
//     name : 'Chips',
//     mmodel : 2022,
//     cost : 200,
//     quantity : 5
// },
// product2 = {
//     name : 'Soap',
//     mmodel : 2022,
//     cost : 500,
//     quantity : 10
// },
// product3 = {
//     name : 'Shampoo',
//     mmodel : 2022,
//     cost : 900,
//     quantity : 20
// }
// storeItems.push(product1 , product2, product3)
// console.log(storeItems);
// console.log(storeItems[2]);
// product1['Color'] =  'Any';
// console.log(product1.Color);

/*  Can you use const and update values within an array?  */
//        ****** yES ******


/* 3. What is the output in the console?  */
// const myArr1 = [1,3,5,6,8,9,15];
// console.log(myArr1.indexOf(0));
// console.log(myArr1.indexOf(3));

/* 4. How do you replace the second element in an array myArr =
[1,3,5,6,8,9,15] with the value 4?  */
// let myArr =[1,3,5,6,8,9,15];
// myArr.splice(2,1,4);
// console.log(myArr);

/* 5. What is the output in the console? */
// const myArr2 = [];
// myArr2[10] = 'test';
// console.log(myArr2); 
// console.log(myArr2[2]);

const myArr3 = [3,6,8,9,3,55,553,434];

console.log(myArr3.sort());
myArr3.length = 0;
console.log(myArr3[0]);








