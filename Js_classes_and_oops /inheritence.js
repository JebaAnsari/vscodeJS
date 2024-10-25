class user{
    username(username,password,email){
        this.username = username;
        this.password = password;
        this.email = email
    }
    logMe(password){
            console.log(`is this correct password ${this.password}`);
    }
}

class Setuser extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course added for ${this.username}`);
    }
}

const result = new Setuser("Jeba",345,"ansarijeba@gmil.com");
// console.log(result);
result.addCourse()
const addnewCourse = new user("Fareen");
addnewCourse.logMe(789);
