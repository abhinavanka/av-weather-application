function getWeather() {

  let city = document.getElementById("city").value;
  let apiKey = "your_api_key";

  let url = `/.netlify/functions/weather?city=${city}`;
  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("API error");
    }
    return response.json();
  })
  .then(data => {

    let temp = data.main.temp;
    let desc = data.weather[0].description;
    let condition = data.weather[0].main;

    let weatherIcon = "";

    if (condition === "Clear") {
      weatherIcon = "☀️";
    } else if (condition === "Clouds") {
      weatherIcon = "☁️";
    } else if (condition === "Rain") {
      weatherIcon = "🌧️";
    } else if (condition === "Drizzle") {
      weatherIcon = "🌦️";
    } else if (condition === "Thunderstorm") {
      weatherIcon = "⛈️";
    } else if (condition === "Snow") {
      weatherIcon = "❄️";
    } else {
      weatherIcon = "🌫️";
    }

    document.getElementById("result").innerHTML = `
      <div class="icon">${weatherIcon}</div>
      <div class="temp">${temp} °C</div>
      <div class="desc">${desc}</div>
    `;
  })
  .catch(() => {
    document.getElementById("result").innerHTML =
      "City not found or API error";
  });
