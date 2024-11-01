const key = 'a490ac7b3e05c5cc933701fd96f3cc6d';

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) => {
            displayWeatherData(data);
        })
        .catch((error) => {
            alert(error.message);
        });
}

function displayWeatherData(data) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // Clear previous results

    const div = document.createElement('div');
    const title = document.createElement('h3');
    const temp = document.createElement('p');
    const wind = document.createElement('p');
    const desc = document.createElement('p');

    desc.className = 'para';
    div.className = 'card';
    title.className = 'heading';
    title.textContent = `Weather in ${data.name}`;
    temp.innerHTML = `Temperature: ${data.main.temp} <i class="fa-duotone fa-solid fa-clouds"></i> °C`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    desc.textContent = `description : ${data.weather[0]?.description}`;

    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(temp);
    div.appendChild(wind);
    cardContainer.appendChild(div);
}
