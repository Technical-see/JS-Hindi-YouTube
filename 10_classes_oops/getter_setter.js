class User{
    constructor(email, password){
        this.email = email,
        this.password = password


    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         return this._email = value 
            
    }

    get password(){
        return  `${this._password}ami`
    }

    set password(value){

        this._password = value


    }
}

const data = new User("ami@gmail.com", 123)

console.log(data.password);
console.log(data.email);