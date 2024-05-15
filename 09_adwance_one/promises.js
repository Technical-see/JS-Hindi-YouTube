// promise One

const promiseOne = new Promise(function(resolve, reject){
    // Do Simply async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log("Async task completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// promise Two
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolve");
})

// promise Three
const promiseThree = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        resolve({ user: "Amit", userEmail: "ami@example.com"})
    },1000)

    
})

promiseThree.then(function(user){
    console.log(user);
})

// promise Four

const promiseFour = new Promise(function(resolve, reject){
setTimeout(function(){
let error = true;
if (!error) {
    resolve({userName: "Am i t", Pass: "123"})
}else{
    reject('ERROR: Something went wrong')
}

}, 1000)

})

promiseFour.then((user) => {
    console.log(user);
    return user.userName;
}).then((userName) => {
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));


// promise Five
const promiseFive = new Promise(function(resolve, rejected){
    setTimeout(function(){
        let error = true;
        if (!error) {
           resolve({userName: "JS_Developer", Pass: "123"});
        }else{
            rejected("Error: JS went to wrong");
        }

    }, 1000)
})

async function ConsumedPromiseFive(){
    // const response = await promiseFive
    //     console.log(response);
        try {
            const response = await promiseFive
             console.log(response);  
        } catch (error) {
            console.log(error);
        }
}

ConsumedPromiseFive()


// async function getAllUsers(){
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")

//    const data = await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log("E: ", error);
//    }
// }

// getAllUsers()




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).catch((data) => {
    console.log(data);
}).catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

// https://developer.mozilla.org/en-US/docs/Web/API/fetch
