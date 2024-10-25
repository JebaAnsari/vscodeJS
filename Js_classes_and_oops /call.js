function setUsername(username){
    this.username = username 
    console.log("called here");

}
function createUser(username,email,password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}
const chai = new createUser("Jeba","ansari@fb.com",345);
console.log(chai);