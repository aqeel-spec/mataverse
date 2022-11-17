// *** Employee tracking app ***

class Employee {
    constructor(fname , lname , workingyears){
        this.fname = fname ;
        this.lname = lname;
        this.workingyears = workingyears
    }
}
let person1 = new Employee('Aqeel' , 'Shahzad',5);
let person2 = new Employee('Haider' , 'Nawaz',10);
let worker = [person1 , person2];
Employee.prototype.personDetail = function () {
    return `${this.fname} ${this.lname} has been working here from ${this.workingyears} years`;
}
worker.forEach ((person) => {
    console.log(person.personDetail());
})

// *** Manu items price calculator ***
class Sman {
    #price1 = 10;
    #price2 = 20;
    constructor (val1 , val2) {
        this.val1 = val1 ;
        this.val2 = val2 ;
    }
    calculation () {
        let price = (this.val1 * this.#price1) + (this.val2 * this.#price2)
        return price
    }
    get totalPrice () {
        return this.calculation();
    }
}
let item1 = new Sman (2,0);
let item2 = new Sman (1,3);
let item3 = new Sman (3,3);
console.log(item1.totalPrice);
console.log(item2.totalPrice);
console.log(item3.totalPrice);


