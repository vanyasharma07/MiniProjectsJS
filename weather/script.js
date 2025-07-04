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

  async function fetchWeatherData(city){};

  function displayWeatherData(weatherData){};

  function showError () {
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
  }
});