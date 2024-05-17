const user = {
    Name: "Amit",
    Profile: "Developer",
    Pass: 123,
    LoginCount: 8,
    Login: true,
     
    getUserDetails: function(){
        // console.log("Got User Details from database");
        // console.log(`UserName: ${this.Name}`);
        // console.log(this);
    } 
    
}

// console.log(user.Name);
// console.log(user.getUserDetails());
// console.log(this);


function userDetails(username, login, designation){

    this.username = username;
    this.Login = login;
    this.designation = designation;
    return this; // do return or not but bydefault implecitely it has return

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne  = new userDetails("Amit", 9, "developer")// without new keywords overwrite userOne by userTwo so new keywords provide the new instance everytime
const userTwo  = new userDetails("Kumar", 10, "designer")
console.log(userOne.constructor); 
// console.log(userTwo); 

console.log();