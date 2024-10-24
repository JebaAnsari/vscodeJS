const promiseOne = new Promise(function(resolve, reject) {
    // any task
    setTimeout(function() {
        console.log('Async task completed of (PromiseOne)');
        resolve('Success');
        reject('Failure'); 
    }, 1000);
});

promiseOne
    .then(function() {
        console.log('promiseOne is called here after calling resolve function'); // This won't run
    })
    .catch(function() {
        console.log('promiseOne was rejected exucuted on reject function ');
    });

const promiseTwo = new Promise(function(resolve,reject){

})

// another method to use promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 with direct call with then');
        reject(); 
    },1000)
}).then(function(){
    console.log('Promise2 resolved');
}).then(function(){
    console.log('hello');
}).catch(function(){
    console.log('rejected code');
})

const promiseThree = new Promise(function(resolve,reject){
    const success = false;
    if(success){
        resolve('Opereation succeed');
    }
    else{
        reject('operation rejected');
    }
})

promiseThree.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"jeab",password:"ansari"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumePromisefour(){
   try{
    const response = await promiseFour
    console.log(response);
   }
   catch(error){
        console.log(error);
   }
}

consumePromisefour();

async function getAllusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log('E:error has been occurred');
    }
}
// getAllusers();

// fetch('https://api.github.com/users/mojombo')
// fetch('https://api.github.com/users/hiteshchoudhary')
fetch('https://api.github.com/users/JebaAnsari')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('E : Error is bieng occured');
})


