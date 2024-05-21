// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


const myHeros = ["Thor", "Spiderman"]

const heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy Power ${this.Spiderman}`);

    }
    
}

Object.prototype.amit = function(){
    console.log(`Amit is present in all objects`);
}

Array.prototype.heyAmit = function(){
    console.log(`Amit says hello`);
}

// heroPower.amit()  //object have access
// myHeros.amit()     // array have access
// myHeros.heyAmit()   // array have access
// heroPower.heyAmit()    // not a access

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "HighTech-Galaxy     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Amit".trueLength()
"iceTea".trueLength()
