type Author = {
    fName : string;
    lname : string
}

type Book = {
    author : Author;
    name : string
}

const myBook : Book = {
    author : {
        fName : "Aqeel",
        lname : "Shahzad"
    },
    name : "Abi to kosish kr rha ho"
}
console.log(myBook)