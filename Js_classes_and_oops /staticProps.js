class user{
    constructor(username,email,password){
        this.username = username;

    }
    logMe(){
        console.log(`username is: ${this.username}`);
    }

    static createId(){
        return `234`;
    }
}

const result = new user("jeba Ansari");
console.log(result.createId());
console.log(result.logMe());