

const greeting = (message : string) => console.log(`Hello ${message}`);


interface difinationInterface {
    (message : string) : void
}

function sayHello (callback : difinationInterface) {
    callback("kmali")
}
sayHello(greeting);





function myCallBack (text : string) {
    console.log(`inside myCallback : ${text}`)
}


function callingFunction (initialText : string, callback : (text : string) => void) {
    callback(initialText)
}
callingFunction("Hello g",myCallBack);










