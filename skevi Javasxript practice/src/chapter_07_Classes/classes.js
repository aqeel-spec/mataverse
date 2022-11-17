// function Dog (dogName, weight, color, breed) {
//   this.dogName = dogName;
//   this.weight = weight;
//   this.color = color;
//   this.breed = breed;
// }
// let dog = new Dog("Jacky", 30, "brown", "labrador");
// console.log(dog);

//const { time } = require("console");

// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("Jacky", 30, "brown", "labrador");
// console.log(dog);
// class Myclass {
//     constructor (fname , lname) {
//         this.fname = fname ,
//         this.lname = lname
//     }
// }
// let p = new Myclass ('Aqeel','Shahzad');
// console.log('Hi',p.fname , '&LastName', p.lname);

//   Exercise 7.1
/** 
class Person {
    constructor (firstName , lastName) {
        this.firstName = firstName,
        this.lastName = lastName
    }
}
let friend1 = new Person('Haider', 'Nawaz');
let friend2 = new Person('Muzammal', 'Ahmad');
console.log(`Hello, ${friend1.firstName + ' ' + friend1.lastName}`);
console.log(`Hello, ${friend2.firstName + ' ' +friend2.lastName}`);
*/
//          Methods
/**
 * In a class, we can specify functions. This means that our object can start
    doing things using the object's own properties—for example, printing a
    name. Functions on a class are called methods. When defining these
    methods, we don't use the function keyword. We start directly with the
    name:
*/
// Example
/**
 * class Person {
    constructor (fname , lname ){
        this.fname = fname,
        this.lname = lname
    }
    greet() {
        console.log("Hi there I'm",this.fname);
    }
    complain (name , object){
        return "That's is wonderfull "+ object + ' , ' + name
    }
}
let p = new Person ('Aqeel', 'Shahzad');
let complain = p.complain('Aqeel','hat');
console.log(complain);
 */

//p.greet();

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there!");
//   }
//   compliment(name, object) {
//     return "That's a wonderful " + object + ", " + name;
//   }
// }
// let p = new Person();
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);
//     *** Exercise 7.2 ***
/** 
class Person {
  constructor(fname, lname) {
    this.fname = fname,
    this.lname = lname
  }
  fullName() {
    return this.fname + ' '+ this.lname
  }

}
let friend1 = new Person('Haider', 'Nawaz');
let friend2 = new Person('Muzammal', 'Ahmad');
console.log(friend1.fullName());
console.log(friend2.fullName());
*/

// class Person {
//   #fname;
//   #lname
//   constructor(fname , lname) {
//     this.#fname = fname ;
//     this.#lname = lname ;
//   }
//   get firstName () {
//     return this.#fname ;
//   }
//   set firstName (firstName) {
//     this.#fname = firstName ;
//   }
//   get lastName () {
//     return this.#lname
//   }
//   set lastName (lastName) {
//     this.#lname = lastName  ;
//   }
// }

// let p = new Person('Aqeel' , 'Shahzad');
// console.log(p.firstName);

// class Person {
//   #firstname;
//   #lastname;
//   constructor(firstname, lastname) {
//     this.#firstname = firstname;
//     this.#lastname = lastname;
//   }
//   get firstname() {
//     return this.#firstname;
//   }
//   set firstname(firstname) {
//     if (firstname.startsWith("M")) {
//       this.#firstname = firstname;
//     } else {
//       this.#firstname = "M" + firstname;
//     }
//   }
//   get lastname() {
//     return this.#lastname;
//   }
//   set lastname(lastname) {
//     this.#lastname = lastname;
//   }
// }
// let p = new Person("Aqeel", "Shazhad");
// p.firstname = "Adnane";
// console.log(p.firstname);

// **** Inheritance ****
// class Vehicle {
//   constructor(color, currentSpeed, maxSpeed) {
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//   }
//   move() {
//     console.log("moving at", this.currentSpeed);
//   }
//   accelerate(amount) {
//     this.currentSpeed += amount;
//   }
// }
// class Motorcycle extends Vehicle {
//   constructor(color, currentSpeed, maxSpeed, fuel) {
//     super(color, currentSpeed, maxSpeed);
//     this.fuel = fuel;
//   }
//   doWheelie() {
//     console.log("Driving on one wheel");
//   }
// }

// let motor = new Motorcycle ('Green' , 0 , 250 , 'gasoline');
// console.log(motor);
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();
// console.log('updated value : ',motor);

//  page=226 of svekis JavaScript

//  *** Prototypes ***
// class Person {
//   constructor (fname , lname ) {
//     this.fname = fname , 
//     this.lname = lname
//   }
//   greet () {
//     console.log('Hi there!');
//   }
// }

// Person.prototype.introduce = function () {
//   console.log("Hi, I'm ", this.fname);
// }
// let p = new Person('Aqeel' , 'Shahzad');
// p.introduce();
// Person.prototype.favColor = 'green';
// console.log(p.favColor);
// let p2 = new Person('Maria', 'aZAM');
// p2.introduce();


// *** Exercise 7.3 ***

class Animal {
  constructor(animal , sound) {
    this.animal = animal , 
    this.sound = sound
  }
  speak () {
    console.log(this.animal + " speaks " + this.sound);
  }
}
Animal.prototype.action = function () {
  return this.animal + ' is eating'
}
let cat = new Animal ( 'Cat' , 'miyao' );
let dog = new Animal ('Dog', 'bark')
cat.speak();
console.log(dog.action());
console.log(dog);






























