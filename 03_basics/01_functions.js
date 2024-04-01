

function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

// addTwoNumbers(3, "A")


function addTwoNumbers(number1, number2){
//    let result = number1 + number2;
//    return result

return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result", result);


function loginUserMessage(username = "Ami") {

    // if(username === undefined){
    //     console.log("Please Enter Username");
    //     return
    // }

    if(!username){
        // console.log("Please Enter Username");
        return
    }

    return `${username} Just LoggedIn` 

}

// console.log(loginUserMessage("AMIT"));
// console.log(loginUserMessage("Amit"));

function calculateCartPrice(val1, val2, ...num1){

    return num1;

}

// console.log(calculateCartPrice(200, 400, 600, 2000));


const user = {
    username: "AMIT",
    price: 400
}

function handleObject(anyobject){
    console.log(`My name is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user) // or

// handleObject({
//     username: "Kumar",
//     price: 600
// })


const newArray = [400, 300, 200, 100, 800]

function returnSecondValue(getarray){
  return getarray[2]

}

// console.log(returnSecondValue(newArray)); //or

console.log(returnSecondValue([200, 400, 600, 2000]));
