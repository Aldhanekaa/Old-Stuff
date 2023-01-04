// var SpaceShuttle = function (targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet)
// console.log(SpaceShuttle)

// array iteration
const item = [12, 10, 2, 3, 10, 15]

const map = item.map(e => e % 2 == 0)
const mep = item.filter(e => e % 2 == 0)
const sum = [1, 2, 3].reduce((result, item) => {
    return result + item
}, 10)
console.log(sum)


const isEven = (...n) => {
    console.log(n)
    return n.filter(e => e % 2 == 0);
}
let printMsg = (evenFunc, ...num) => {
    console.log(num)
    const isNumEven = evenFunc(...num);
    console.log(`The number ${isNumEven} are even number.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 4, 2, 3, 5, 6);
//  Prints: The number 4 is an even number: True.


// const timeFuncRuntime = funcParameter => {
//     let t1 = Date.now();
//     let func = funcParameter();
//     console.log(func)
//     let t2 = Date.now();
//     return t2 - t1;
// }

// const addOneToOne = () => 1 + 1;

// timeFuncRuntime(addOneToOne);


const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)
console.log(time2p2)

const person = {
    _age: 37,
    set age(newAge) {
        if (typeof newAge === 'number') {
            return this._age = newAge;
        } else {
            console.log('You must assign a number to age');
        }
    }
};

person._age = '40'
console.log(person._age); // Prints forty-five
console.log(person.age = `1`)
