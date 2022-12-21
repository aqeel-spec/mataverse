// *** ~~~ ___ Enums (shumar karna) ___ ~~~ ***
// Enums are one of the few features TypeScript has which is not a
// type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants.
// Enums allow a developer to define a set of named constants.
// TypeScript provides both numeric and string-based enums.
// *** Numeric enums ***
// An enum can be defined using the "enum" keyword.
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
console.log(Direction.right); // Output : 4
// Above, we have a numeric enum where Up is initialized with 1. All of the
// following members are auto-incremented from that point on.
console.log("=========================");
var Direction2;
(function (Direction2) {
    Direction2[Direction2["up"] = 0] = "up";
    Direction2[Direction2["down"] = 1] = "down";
    Direction2[Direction2["left"] = 2] = "left";
    Direction2[Direction2["right"] = 3] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.up, Direction2.right); // output : 3
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["yes"] = 1] = "yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    // some logic
}
respond("Princess Caroline", UserResponse.yes);
/**
enum E {
    A = getSomeValue(),
    B,// Enum member must have initializer
}
*/
// *** ~~~ ___ String enums ___ ~~~ ***
// String enums are a similar concept,
// but have some subtle runtime differences
console.log("============= String Enums =======");
var Direction4;
(function (Direction4) {
    Direction4["Up"] = "UP";
    Direction4["Down"] = "DOWN";
    Direction4["Left"] = "LEFT";
    Direction4["Right"] = "RIGHT";
})(Direction4 || (Direction4 = {}));
console.log(Direction4.Up);
// While string enums don’t have auto-incrementing behavior
// String enums allow you to give a meaningful and
// readable value when your code runs.
// *** ~~~ ___ Heterogeneous enums ___ ~~~ ***
// Technically enums can be mixed with string and numeric members,
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["yes"] = "yes";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
// Unless you’re really trying to take advantage of JavaScript’s runtime behavior in a clever way,
// it’s advised that you don’t do this.
// *** ~~~ ___ Computed and constant members ___ ~~~ ***
// An enum member is considered constant if:
// It is the first member in the enum and it has no initializer,
// in which case it’s assigned the value 0:
// E.X is constant
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
console.log("===========");
console.log(E.X);
// anotehr exaxmple
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
console.log("=========================");
console.log(E1.X, E2.C);
// The enum member is initialized with a constant enum expression
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.Read, FileAccess.Write);
// *** Union enums and enum member types
// There is a special subset of constant enum members that aren’t calculated: literal enum members. A literal enum member is a constant enum member with no initialized value, or with values that are initialized to
// any string literal (e.g. "foo", "bar, "baz")
// any numeric literal (e.g. 1, 100)
// a unary minus applied to any numeric literal (e.g. -1, -100)
// When all members in an enum have literal enum values, some special semantics come into play.
// NOTE :
//      The first is that enum members also become types as well!
var ShapeKIng;
(function (ShapeKIng) {
    ShapeKIng[ShapeKIng["Circle"] = 0] = "Circle";
    ShapeKIng[ShapeKIng["Square"] = 1] = "Square";
})(ShapeKIng || (ShapeKIng = {}));
let c = {
    // Type 'ShapeKIng.Square' is not assignable
    // to type 'ShapeKIng.Circle'.
    //kind : ShapeKIng.Square,
    kind: ShapeKIng.Circle,
    radius: 100,
};
// The other change is that enum types themselves effectively become a union of each enum member.
// enum E {
//   Foo,
//   Bar,
// }
// function f(x: E) {
//   if (x !== E.Foo || x !== E.Bar) {
//     //This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
//     //
//   }
// }
// *** ~~~ ___ Enums at runtime ___ ~~~ ***
var E4;
(function (E4) {
    E4[E4["X"] = 0] = "X";
    E4[E4["Y"] = 1] = "Y";
    E4[E4["Z"] = 2] = "Z";
})(E4 || (E4 = {}));
function f(obj) {
    return obj.X;
}
console.log(f(E));
// *** Enums at compile time
// missing
// *** ~~~ ___ Reverse mappings ___ ~~~ ***
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let nameOfA = Enum[a];
console.log("a : ", a);
console.log("nameOfA : ", nameOfA);
let directions = [
    0 /* Direction5.Up */,
    1 /* Direction5.Down */,
    2 /* Direction5.Left */,
    3 /* Direction5.Right */,
];
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
0 /* EDirection.Up */;
//          (enum member) EDirection.Up = 0
ODirection.Up;
//         (property) Up: 0
// Using the enum as a parameter
function walk(dir) { }
function run(dir) { }
console.log(walk(2 /* EDirection.Left */), run(ODirection.Right));
export {};
