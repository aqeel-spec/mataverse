// for with break loop

// for (let i = 0 ; i < 10 ; i++) {
//     console.log(i);
//     if (i === 4) {
//         break;
//     }
// }

let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  },
];
// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].year >= 2020) {
//     if (cars[i].color === "black") {
//       console.log("I have found my new car:", cars[i]);
//       break;
//     }
//   }
// }
/**
 * However, often it is not a best practice to use break . If you can manage to
    work with the condition of the loop to break out of the loop instead, this is a
    much better practice. It prevents you getting stuck in an infinite loop, and
    the code is easier to read.
 */

// while (true) {
//   if (superLongArray[0] != 42 && superLongArray.length > 0) {
//     superLongArray.shift();
//   } else {
//     console.log("Found 42!");
//     break;
//   }
// }
// let superLongArray = 'shahzad';
// while (superLongArray.length > 0 && notFound) {
//   if (superLongArray[0] != 42) {
//     superLongArray.shift();
//   } else {
//     console.log("Found 42!");
//     notFound = false;
//   }
// }
// for (let car of cars) {
//   if (car.color !== "black") {
//     continue;
//   }
//   if (car.year >= 2020) {
//     console.log("we could get this one:", car);
//   }
// }
// let i = 1;
// while (i < 50) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let i = 1;
// while (i < 50) {
//   i++;
//   if ((i - 1) % 2 === 0) {
//     continue;
//   }
//   console.log(i - 1);
// }
// for (let i = 1; i < 50; i = i + 2) {
//   console.log(i);
// }

// *** Exercise 5.8 *** //

// // continue for loop
let output = 'Shahzad';
let skipNum = 5 ;
for (let i = 0 ; i < output.length ; i++) {
  if (i === skipNum) {
    continue;
  }
 // console.log(i);
 console.log(`${i} ${output[i]}`);
}
console.log(output);


console.log('\n \t ************** Next break for loop **************');
// break for loop
let output1 = "Shahzad";
let skipNum1 = 5;
for (let i = 0; i < 10; i++) {
  if (i === skipNum1) {
    break;
  }
  // console.log(i);
  console.log(`${i} ${output1[i]}`);
}
console.log(output1);
