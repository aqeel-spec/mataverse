
class Car {
    name! : string;
    color! : string;
    model! : number;
    _lisence! : string;
    
    constructor (name : string, color : string , model : number) {
        this.name = name;
        this.color = color;
        this.model = model
    }
    get lisence () {
        return this._lisence ;
    }
    set lisence (val) {
        this._lisence = val
    }
}

const cultus = new Car("cultus","green",1998);
const civic = new Car("civic","black",1998);
const honda = new Car("honda","green",1998);

cultus._lisence = "cultus123";// set property 

console.log('====================================');
console.log(cultus);
console.log(civic);
console.log(honda);
console.log('====================================');