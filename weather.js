const apiKey = "YOUR_API_KEY"; // Get your API key from OpenWeatherMap

const searchButton = document.getElementById("search-btn");
const locationInput = document.getElementById("location-input");
const weatherInfo = document.getElementById("weather-info");

searchButton.addEventListener("click", () => {
  const location = locationInput.value.trim();
  if (location) {
    getWeatherData(location);
  } else {
    alert("Please enter a location.");
  }
});

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    if (data.cod === 200) {
      displayWeatherData(data);
    } else {
      alert("Location not found. Please enter a valid location.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("An error occurred. Please try again later.");
  }
}

function displayWeatherData(data) {
  const { name, sys, weather, main } = data;
  const country = sys.country;
  const description = weather[0].description;
  const temperature = main.temp;
  const humidity = main.humidity;

  const weatherHTML = `
    <h3>${name}, ${country}</h3>
    <p>Weather: ${description}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
  `;

  weatherInfo.innerHTML = weatherHTML;
}
