// after ES6

// class user {
//     constructor(username, email, pass){
//         this.username = username;
//         this.email = email;
//         this.pass = pass;
       
//     }

//      encryptPassword(){
//         return `${this.pass}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userDetails = new user("Amit", "amiclass@fb.com", "123")
// console.log(userDetails.encryptPassword());
// console.log(userDetails.changeUsername());


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());