document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "52ad7d16dd73f68d38d7efacea5f2c4a";

  getWeatherBtn.addEventListener('click', async() => {
    const city = cityInput.value.trim();
    if(!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }

  });

  //defining helper functions
  async function fetchWeatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log("Final API URL:", url);
    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if(!response.ok) {
      throw new Error("City not found.")
    };
    const data = await response.json();
    return data;
  };

  function displayWeatherData(weatherData){
    console.log(weatherData);
    const {name, main, weather} = weatherData; 
    cityNameDisplay.textContent = name;
    errorMessage.classList.add("hidden"); 
    temperatureDisplay.textContent = `Temperature : ${main.temp}°C`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;          
    weatherInfo.classList.remove("hidden");
  };
  

  function showError () {
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
  }
});