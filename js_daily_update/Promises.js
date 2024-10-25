 
const PromiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

PromiseOne.then(function(){
    console.log("Promise Consumed");
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
    
}).then(function(){
    console.log('async task 2 gets resolved');
})

const PromisiThird = new Promise(function(resolve,reject){
    resolve({username:'Jeba',lastName:'Ansari'});

})
PromisiThird.then(function(user){
    console.log('Yes completes third promises');
    console.log(user);
});

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let erorr = true;
    if(!erorr){
        resolve({username:'Jeba',lastName:'Ansari'});

    }
    else{
        reject('Code got blocked');
    }
    },1000)
})
 promiseFour.then((user)=>{
        console.log(user);
        return user.username;    
}).then((username)=>{
    console.log(username);
    
}).catch((erorr)=>{
    console.log('sorry cant work');
}).finally(()=>{
    console.log('i am always executed');
});

// Promise 5
const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'Jeba',work:'Promise5'});
            resolve();
        }
        else{
            reject('Promisefive falied');
        }
    },1000)
})

// async is similar like .then ,.catch is used to accept or reject the promise and await keyword is used in async function and promise is an object so ,it cant be wriiten like Promise() thi  
async function consumedPromisefive()
{
    try {
        const response = await PromiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumedPromisefive();

// fetch is a library used in asnc function with await keyword to fetch data and initialy data is ini string so we need to store it in a variable and convert it into json like this 

// async function getAllusers(){
//    try {
//     const resurl = await fetch('https://jsonplaceholder.typicode.com/users');
//    const data =  await resurl.json();
//    console.log(data);

//    } catch (error) {
//     console.log('E',error);
//    }
// }
// getAllusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));
