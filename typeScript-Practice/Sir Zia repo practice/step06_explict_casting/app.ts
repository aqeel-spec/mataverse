let myName : unknown = "Zia";

console.log((myName as string).length);
console.log((<string>myName).length);

