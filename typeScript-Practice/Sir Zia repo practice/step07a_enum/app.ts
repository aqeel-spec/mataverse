import chalk from "chalk";

enum Color {// starts with 0
    Red,
    Green,
    Blue,
}

var c : Color = Color.Green;// 1
console.log(c);
console.log("==========================");

enum Color1 {
    Red = 1,
    Green ,
    Blue,
}
var colorName : string = Color1[2];// Green
console.log(colorName);// Green
console.log(Color1[3]);// Blue


// - - - Example 03
console.log("============================")

enum Color3 {// //can assign values to all
    Red = 1,
    Green = 2,
    Blue = 4,
}
var colorIndex = Color3["Blue"];// 4
var colorIndex2 = Color3[2];// Green
console.log(colorIndex);
console.log(colorIndex2);























