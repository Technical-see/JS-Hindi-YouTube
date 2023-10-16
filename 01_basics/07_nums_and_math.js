const score = 400
// console.log(score);

const balance = new Number(300) // Exactly 
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNaumber = 535.4509
// console.log(otherNaumber.toPrecision(4));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(otherNaumber.valueOf());


// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.5))
// console.log(Math.sign(-4987));
// console.log(Math.min(3,4,.5,6,8));
// console.log(Math.max(3,4,5,60,8));

// console.log(Math.random()) // diplay 0-9
// console.log(Math.random() * 10 );  // display 0 - 9
// console.log(Math.floor(Math.random() * 10) + 1)  // 1 - 9


const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

