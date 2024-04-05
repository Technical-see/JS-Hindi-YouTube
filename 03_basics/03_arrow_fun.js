const user = {
    username: "Amit",
    price: 999,

    welcomeMessage: function(){

        console.log(`${this.username}, Welcome To Website`);
        // console.log(this); // here what is doing "This" keyword means showing current context
    }
}

// user.welcomeMessage()
// user.username = "Rohit"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//    let username = "Dayal"
//     console.log(this.username);

// }

// chai()


// const chai = function(){
//     let username = "Dayal"
//      console.log(this.username);
 
//  }
 
//  chai()


// const chai = () => {
//     let username = "arrow-function"
//      console.log(this.username);
 
//  }
 
//  chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()