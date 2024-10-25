// const user = {
//     username: "Jeba",
//     logiCount : 8,
//     signedIn : true,
//     getUserDetails : function(){
//         console.log('Function or method inside object');
//         console.log(`the username is ${this.username}`);
//         console.log(this);
//     }


// }
// console.log(this);
// console.log(user.username); 
// console.log(user.getUserDetails());

// new keyword is a constructor function 
function user(username,logiCount,isLoggedIn){
    this.username = username;
    this.logiCount = logiCount ;
    this.isLoggedIn = isLoggedIn
    // return this  no need to write this 
}

const usersOne = new user("jeba",7,true);
const userTwo = new user("Jeba Ansari",9,false);
console.log(usersOne);


