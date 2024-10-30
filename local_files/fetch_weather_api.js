// async function fetchWeatherapi(lat, lon) {
//     try {
//         const key = 'a490ac7b3e05c5cc933701fd96f3cc6d';
//         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`; // Added &units=metric for Celsius
//         const response = await fetch(url);
//         console.log(response.statusText);
//         console.log(response.status);
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         console.log(data.wind);
//         console.log(data.cloud);
//     } catch (error) {
//         console.log('Error: API does not work', error);
//     }
// }

// fetchWeatherapi(40.7128, -74.0060); 


const key = 'a490ac7b3e05c5cc933701fd96f3cc6d';
const lat = 40.7128;
const lon = -74.0060;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
.then((response)=>{
    if(!response.ok){
        throw new Error("something went wrong");
        
    }
    else  return response.json();
   
})
.then((data)=>{
    console.log(data.clouds);
    console.log(data.sys.country);
    console.log(data.name);
    console.log(data.main.pressure);
})
.catch((error)=>{
    console.log('E: API does not work',error);
})