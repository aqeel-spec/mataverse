// *** Word scrambler *** //
/** 
let str = "Aqeel";
function scramble(val) {
  let maxValue = str.length;
  let temp = "";
  for (let i = 0; i < maxValue; i++) {
   // console.log('val.length : ',val.length);
    let ranVar = Math.floor(Math.random() * val.length);
    temp += val[ranVar];
    console.log('temp : \t',temp);
    val = val.substr(0,ranVar) + val.substr(ranVar + 1);
    console.log('str :\t',val);
  }
  return temp ; 
}
console.log(scramble(str));
*/

// *** CountDown timer ***  //

//let date = new Date();
// let d1 = Date.parse("June 5, 2023");

// let d2 = Date.parse(new Date());
// console.log('d1 :',d1);
// console.log('d2 :',d2);
// let d = new Date(d1);

//d.toDateString();

//console.log('d : ',d.toDateString());
// d.setTime(1622889770682)
// console.log(d);
//  console.log(d.toDateString());

// *** CountDown timer *** //
let endDate = Date.parse("2022-11-16T10:33:48.148Z"); 
// specify current time then counter starts

console.log('This project is running since : 16/11/2022' );
function CountDown(para) {
  let custmDate = para - new Date();
  let days = Math.floor(custmDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((custmDate / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((custmDate / 1000 / 60) % 60);
  let seconds = Math.floor((custmDate / 1000) % 60);
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
function update() {
  let tempCounter = CountDown(endDate);
  let outputValues = "";
  for (const property in tempCounter) {
    outputValues += `${property}: ${tempCounter[property]} `;
  }
  console.log(outputValues);
  setTimeout(update, 1000);
}
update();
