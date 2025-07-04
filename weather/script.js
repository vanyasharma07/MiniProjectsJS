document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "05fd89eb0192c0a21ea3e82b4ad30737";

  getWeatherBtn.addEventListener('click', async() => {
    const city = cityInput.ariaValueMax.trim();
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
    const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`;
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
    console.log(data);
    const {name, main, weather} = data;
    cityNameDisplay.textContent = name;
  };

  function showError () {
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
  }
});