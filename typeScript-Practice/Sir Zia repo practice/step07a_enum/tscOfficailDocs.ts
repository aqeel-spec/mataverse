// *** ~~~ ___ Enums (shumar karna) ___ ~~~ ***
// Enums are one of the few features TypeScript has which is not a
// type-level extension of JavaScript.

import { Dir } from "fs";

// Enums allow a developer to define a set of named constants.
// Enums allow a developer to define a set of named constants.
// TypeScript provides both numeric and string-based enums.

// *** Numeric enums ***

// An enum can be defined using the "enum" keyword.
enum Direction {
  up = 1, // value is 1
  down, // value is 2
  left, // value is 3
  right, // value is 4
}
console.log(Direction.right); // Output : 4

// Above, we have a numeric enum where Up is initialized with 1. All of the
// following members are auto-incremented from that point on.

console.log("=========================");

enum Direction2 {
  up,
  down, // value is auto increamenting
  left,
  right,
}
console.log(Direction2.up, Direction2.right); // output : 3

enum UserResponse {
  No = 0,
  yes = 1,
}
function respond(recipient: string, message: UserResponse): void {
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

enum Direction4 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Direction4.Up);

// While string enums don’t have auto-incrementing behavior
// String enums allow you to give a meaningful and
// readable value when your code runs.

// *** ~~~ ___ Heterogeneous enums ___ ~~~ ***

// Technically enums can be mixed with string and numeric members,

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  yes = "yes",
}
// Unless you’re really trying to take advantage of JavaScript’s runtime behavior in a clever way,
// it’s advised that you don’t do this.

// *** ~~~ ___ Computed and constant members ___ ~~~ ***

// An enum member is considered constant if:
// It is the first member in the enum and it has no initializer,
// in which case it’s assigned the value 0:

// E.X is constant
enum E {
  X,
}
console.log("===========");
console.log(E.X);

// anotehr exaxmple
enum E1 {
  X,
  Y,
  Z,
}
enum E2 {
  A = 1,
  B,
  C,
}
console.log("=========================");
console.log(E1.X, E2.C);

// The enum member is initialized with a constant enum expression

enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = "123".length,
}
console.log(FileAccess.Read, FileAccess.Write);

// *** Union enums and enum member types
// There is a special subset of constant enum members that aren’t calculated: literal enum members. A literal enum member is a constant enum member with no initialized value, or with values that are initialized to

// any string literal (e.g. "foo", "bar, "baz")
// any numeric literal (e.g. 1, 100)
// a unary minus applied to any numeric literal (e.g. -1, -100)
// When all members in an enum have literal enum values, some special semantics come into play.

// NOTE :

//      The first is that enum members also become types as well!

enum ShapeKIng {
  Circle,
  Square,
}
interface Circle {
  kind: ShapeKIng.Circle;
  radius: number;
}
interface Square {
  king: ShapeKIng.Square;
  sideLength: number;
}

let c: Circle = {
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

enum E4 {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  return obj.X;
}
console.log(f(E));

// *** Enums at compile time

// missing

// *** ~~~ ___ Reverse mappings ___ ~~~ ***
enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a];
console.log("a : ", a);
console.log("nameOfA : ", nameOfA);

// *** ~~~ ___ const enum ___ ~~~ ***
/**
 * In most cases, enums are a perfectly valid solution.
 * However sometimes requirements are tighter.
 * To avoid paying the cost of extra generated code "use const enum"
 * Const enums are defined using the const modifier on our enums:
 */

const enum Enum2 {
  A = 1,
  B = A * 2,
}
// Const enums can only use constant enum expressions
// and unlike regular enums they are completely removed during
// compilation.

const enum Direction5 {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Direction5.Up,
  Direction5.Down,
  Direction5.Left,
  Direction5.Right,
];

// *** Const enum pitfalls
// Do it yourself

// *** ~~~ ___ Ambient enums ___ ~~~ ***

// Ambient enums are used to describe the shape of already existing enum types.
// declare enum Enum4 {
//     A = 1,
//     B,
//     C = 2,
// }
// console.log(Enum4.C);

// One important difference between ambient and non-ambient enums is that,

/**
 * in regular enums, members that don’t have an initializer
 * will be considered constant if its preceding enum member
 * is considered constant.
 *
 *
 * By contrast, an ambient (and non-const) enum member that
 * does not have an initializer is always considered computed.
 */

// *** ~~~ __ Objects vs Enums __ ~~~ ***

// In modern TypeScript, you may not need an
// enum when an object with as const could suffice

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

EDirection.Up;
//          (enum member) EDirection.Up = 0
ODirection.Up;
//         (property) Up: 0
// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the values
type Direction6 = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction6) {}
console.log(walk(EDirection.Left), run(ODirection.Right));
