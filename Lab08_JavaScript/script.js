const apiKey = 'dc8a83cab61bb25a87b9926e7a426743';

async function fetchWeather(city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    displayWeather(data);
    saveToLocalStorage(data);
}

function displayWeather(data) {
    const city = data.name;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const temperature = data.main.temp;

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('weather');

    const cityP = document.createElement('p');
    cityP.textContent = `Pogoda w mieście: ${city}`;
    resultDiv.appendChild(cityP);

    const descriptionP = document.createElement('p');
    descriptionP.textContent = description;
    resultDiv.appendChild(descriptionP);

    const img = document.createElement('img');
    img.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    resultDiv.appendChild(img);

    const temperatureP = document.createElement('p');
    temperatureP.textContent = `${temperature} °C`;
    resultDiv.appendChild(temperatureP);

    document.getElementById('result-container').appendChild(resultDiv);
}

function saveToLocalStorage(data) {
    let weatherData = JSON.parse(localStorage.getItem('weatherData')) || [];
    weatherData.push(data);
    localStorage.setItem('weatherData', JSON.stringify(weatherData));
}

function loadFromLocalStorage() {
    const weatherData = JSON.parse(localStorage.getItem('weatherData')) || [];
    weatherData.forEach(data => displayWeather(data));
}

loadFromLocalStorage();

document.getElementById('fetch-weather-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeather(city);
    }
});
