document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const waetherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "05fd89eb0192c0a21ea3e82b4ad30737";

  getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.ariaValueMax.trim();
    if(!city) return;

  });

  function fetchWeatherData(city){};

  function displayWeatherData(eatherData){};

  function showError () {
    
  }
});