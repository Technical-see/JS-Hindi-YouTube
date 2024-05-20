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
    console.log(`Hitesh says hello`);
}

// heroPower.amit()  //object have access
// myHeros.amit()     // array have access
// myHeros.heyAmit()   // array have access
heroPower.heyAmit()    // not a access

// inheritance
