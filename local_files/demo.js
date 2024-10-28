// const rateLimitResponse = await fetch('https://api.github.com/rate_limit');
// const rateLimitData = await rateLimitResponse.json();
// console.log(rateLimitData); // Inspect rate limit data

fetch('https://api.github.com/rate_limit')
.then(function(response){
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('E:error',error);
})