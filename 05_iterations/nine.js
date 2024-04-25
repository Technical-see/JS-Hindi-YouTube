// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

// OR //

const myNums = [1, 2, 3, 4]

// Using Normal Function

// const myTotal = myNums.reduce(function(acc, curval){
//     console.log(`Acc: ${acc} and Curval: ${curval}`);
//  return acc + curval;

// }, 0)

// console.log(myTotal);


// USing Arrow Function
const myTotal = myNums.reduce((acc, curval) => acc + curval, 0)
// console.log(myTotal);



const shoppingCart = [
    {
        itemName : "JS Course",
        price : 3999
    },
    {
        itemName : "PY Course",
        price : 5999
    },
    {
        itemName : "Mobile dev Course",
        price : 12999
    },

]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);