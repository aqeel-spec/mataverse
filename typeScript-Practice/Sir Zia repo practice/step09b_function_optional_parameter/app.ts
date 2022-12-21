import { lstat } from "fs";

function mul(a: number, b: number, c?: number) {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}
console.log(mul(2, 3, 2));

// Named function with optional parameters

function buildName(fName: string, lName?: string) {
  if (lName) return fName + " " + lName;
  else return fName;
}
console.log(buildName("Bob")); //
//console.log(buildName("Bob", "Adams","Sir")); // error
console.log(buildName("Bob", "Adams"));

// anonymous function with optional parameters

var buildName1: (fName: string, lName?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};
console.log(buildName1("bob"));
console.log(buildName1("bob","Adam2"))