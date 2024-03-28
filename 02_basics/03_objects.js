// singleton
//object.create

// object leteral

const mySym = Symbol("Keys1")

const jsUser = {
    Name: "AMi",
    "Location": "Gurgaon",
    // mySym : "MyKeys1",
    [mySym] : "MyKeys1",
    Email: "ami@google.com",
    Age: 45,
    IsLoggedIn: false,
    lastLoginDays: ["Monday", "Saterday"] 

}

// how to access object
// console.log(jsUser.Email);
// console.log(jsUser["Email"]);
// console.log(jsUser["Location"]); //This is the best way to access object value i.e square Notetion

// console.log(typeof jsUser.mySym);
// console.log(typeof jsUser[mySym]);

// how to converte object
 jsUser.Email = "amit@chatgpt.com"
// Object.freeze(jsUser)
jsUser.Email = "amit@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.Name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());