const greeting = (message) => console.log(`Hello ${message}`);
function sayHello(callback) {
    callback("kmali");
}
sayHello(greeting);
function myCallBack(text) {
    console.log(`inside myCallback : ${text}`);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("Hello g", myCallBack);
export {};
