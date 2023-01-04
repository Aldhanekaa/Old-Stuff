function Animal() { }
Animal.me = 'Hello World!';
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog(name = "doe") {
    let number = 0;
    let _name = name;
    this.add = function () {
        console.log(++number)
    }
    this.bark = function () {
        console.log('Woof!')
    }
    this.name = function () {
        console.log(_name)
    }
}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;
Dog.prototype.eat = function () {
    return "peck peck peck";
};

// Only change code above this line
function mixin(obj) {
    let name = 'hello';
    obj.Name = function () {
        console.log(name);
    }
}
mixin.prototype = Object.create(Animal.prototype)
let beagle = new Dog();
beagle.prototype = {
    "k": "jh"
}
mixin(beagle)

console.log(beagle)

// ==================== Class ==========================
class me {
    constructor(age) {
        this.name = 'aldhaneka'
        this.age = age
    }

    k() {
        console.log(22)
    }
}
class E extends me {
    constructor(age) {
        super(age);
        this.number = 0;
        this.name = 'AlDHANekA'
    }
    sum() {
        this.add()
    }
    add() {
        this.number++;
        console.log(this.number)
    }
}

const aldhan = new E(12)
aldhan.prototype = Object.create(Dog.prototype)
mixin(aldhan)

console.log(aldhan)