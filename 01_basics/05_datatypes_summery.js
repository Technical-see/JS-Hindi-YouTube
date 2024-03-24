// Premitive / call by value

// 7 dataTypes: number, string, boolean, null, undefine, symbol, bigint

const score = 123
const  scoreValue = "123.3"
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

const bigNumber = 3456543576654356754n
 
//  console.table([score, scoreValue, isLoggedIn, outsideTemp,  userEmail, id, anotherId, bigNumber] )

//  here we have find variable type
 console.table( [typeof score, typeof scoreValue, typeof isLoggedIn, typeof outsideTemp, typeof userEmail, typeof id, typeof anotherId, typeof bigNumber ])


// refference /Non-premitive

// Array, Objects, Functions

const heros = ["shaktiman", "doga", "nagraj"];

let myobj = {
      name : "Amit",
      age : 26,
}

let myfunction = function(){
      console.log("HelloWorld");
}

console.table([ typeof heros, typeof myobj, typeof myfunction] );




