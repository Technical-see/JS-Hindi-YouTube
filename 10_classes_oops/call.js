function SetUserName(username){
    this.userName = username;
    console.log("Called");
}

function createUser(username, email, pass){
    SetUserName.call(this, username)
    this.email = email;
    this.pass = pass;

}

const getDetails = new createUser("Amit", "ami@fb.com","123");

console.log(getDetails);