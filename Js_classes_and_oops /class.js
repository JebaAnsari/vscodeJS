class user{
   
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    decryptemail(){
        return `${this.username.toUpperCase()}Ansari`
    }

}

const result = new user("Jeba","ansari@245.com",345);
console.log(result);
console.log(result.encryptPassword());
console.log(result.decryptemail());