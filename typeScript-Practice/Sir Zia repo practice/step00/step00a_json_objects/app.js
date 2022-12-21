// json Data 
/**
JSON syntax
    {
        "name" : "AQeel",
        "age" : 21,
        "gender" : "male",
    }
*/
// JSON data requires double quotes for the key.
// *** JSON Object
// JSON objects is written inside the curly brackets
// JSON objects can contains mupltiple key/value pairs
// - - - Example 
// JSON Object
const data = { "name": "AQeel", "age": 21 };
// we can acces properties using .
data.age;
// *** json array
// json array is wtitten inside the square brackets [];
// - - - Example 2
// ["Vipin", "Ankit","Raj"]
// *** accessing json data
// by using example 1 data
data.name;
// square brackets can also be used to access json data
// - - - Example 03
// JSON Object
const detail = {
    "name": "Vipib",
    "age": 21
};
console.log(detail["age"]);
export {};
// *** USE of JSON
// JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa.
// JSON data are very easy to parse and use.
// JSON is language independent(We can create and use JSON in other programming languages too).
// repo link : https://github.com/panaverse/learn-typescript/tree/master/step00a_json_objects
