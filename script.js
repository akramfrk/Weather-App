const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');

const apiKey = '12c2a4d4f50d89d9c509220bf8183ab0';

const notFound = document.querySelector('.not-found');
const searchCity = document.querySelector('.search-city');
const weatherInfo = document.querySelector('.weather-infos');

const countryName = document.querySelector('.country');
const tempText = document.querySelector('.temp-text');
const conditionText = document.querySelector('.condition-text');
const humidityValue = document.querySelector('.humidity-value-text');
const windSpeedValue = document.querySelector('.wind-value-text');
const weatherSummaryImg = document.querySelector('.weather-summary');
const currentDate = document.querySelector('.current-date');
const forecastItemContainer = document.querySelector('.forecast-items-container');

searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && cityInput.value.trim() != '') {
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
});

async function getFetchData(endPoint, city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(apiUrl);
    return response.json();
}

function getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return 'thunderstorm.svg';
    if (id >= 300 && id <= 321) return 'drizzle.svg';
    if (id >= 500 && id <= 531) return 'rain.svg';
    if (id >= 600 && id <= 622) return 'snow.svg';
    if (id >= 701 && id <= 781) return 'atmosphere.svg';
    if (id === 800) return 'clear.svg';
    if (id >= 801 && id <= 804) return 'clouds.svg';
    return 'clouds.svg';
}

function getCurrentDate(){
    const currentDate = new Date();
    const options = {
        weekday : 'short',
        day : '2-digit',
        month : 'short'
    }
    return currentDate.toLocaleDateString('en-DZ', options);
}

async function updateWeatherInfo (city) {
    const weatherData = await getFetchData('weather', city);
    if (weatherData.cod != 200){
        showDisplaySection(notFound);
        return;
    }
    const {
        name : country,
        main : {temp, humidity},
        weather : [{id, main}],
        wind : {speed}
    } = weatherData;

    countryName.textContent = country;
    tempText.textContent = Math.round(temp) + ' ℃';
    conditionText.textContent = main;
    humidityValue.textContent = humidity + '%';
    windSpeedValue.textContent = speed + ' M/s';
    weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`;
    currentDate.textContent = getCurrentDate();
    await updateForecastsInfo(city);
    showDisplaySection(weatherInfo);
}

async function updateForecastsInfo(city) {
    const forecastsData = await getFetchData('forecast', city);
    const timeTaken = '12:00:00';
    const todayDate = new Date().toISOString().split('T')[0];

    forecastItemContainer.innerHTML = '';

    forecastsData.list.forEach(foreCastWeather => {
        if (foreCastWeather.dt_txt.includes(timeTaken) && !foreCastWeather.dt_txt.includes(todayDate)){
            updateForecastsItems(foreCastWeather);
        }
    });
}

function updateForecastsItems(weatherData) {
    const {
        dt_txt : date,
        weather : [{id}],
        main : {temp}
    } = weatherData;
    const dateTaken = new Date(date)
    const dateOption = {
        day : '2-digit',
        month : 'short'
    }
    const dateResult = dateTaken.toLocaleDateString('en-DZ', dateOption);
    console.log(weatherData);

    const forecastItem = `
        <div class="forecast-item">
            <h5 class="forecast-item-date">${dateResult}</h5>
            <img src="assets/weather/${getWeatherIcon(id)}" alt="Weather Image" class="forecast-item-img">
            <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
        </div>
    `

    forecastItemContainer.insertAdjacentHTML('beforeend', forecastItem);
}

function showDisplaySection (section){
    [notFound, searchCity, weatherInfo].forEach(section => section.style.display = 'none');
    section.style.display = 'flex';
}