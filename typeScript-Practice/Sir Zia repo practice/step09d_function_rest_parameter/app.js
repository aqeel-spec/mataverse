function buildName(fName, ...lName) {
    return fName + " " + lName.join(" ");
}
var employeeName = buildName("Shahzad", "kia", "hl", "h");
console.log(employeeName);
// function buildName1(fName: string, ...lName?: string[]) {
//   if (lName) return fName + " " + lName.join(" ");
//   else return fName;
// }
// var employeeName2 = buildName1("Shahzad", "kia", "hl", "h");
// console.log(employeeName2);
// Error : optional not allowed within "rest parameter"
var buildNameFunc = function (firstName, ...lastName) {
    return firstName + " " + lastName.join(" ");
};
console.log("buildNameFunc : ", buildNameFunc("Shahzad", "kia", "hl", "h"));
export {};
// NOte : Rest, optional and default parameters can only be
// at the end of the parameter list
