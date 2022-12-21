const enum Color { // start with 0
    Red,
    Green,
    Blue,
}
var c : Color = Color.Green;


const enum Color1 {
    Red = 1,
    Green,
    Blue,
}
//var colorName : string = Color[2];
//  //Not allowed with const enums

const enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4
}
var colorIndex = Color2["Green"];
console.log(colorIndex);








