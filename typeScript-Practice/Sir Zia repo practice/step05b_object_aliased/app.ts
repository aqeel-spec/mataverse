
// anonymous

let teacher : {name : string, exp : number} = {
    name : "Zeesha",
    exp : 10
}

// aliased Object Type
type Student = {
    name : string;
    age? : number;// Optional property
}
let student : Student = {
    name : "Mam Hira",
    age : 30
}
console.log(student.name);
console.log(student["age"]);


// Interfaces

interface Manager {
    name : string;
    subordiates? : number
}
let storeManager : Manager = {
    name  :  "Rafique",
}
console.log(storeManager.subordiates);
console.log(storeManager["name"]);











