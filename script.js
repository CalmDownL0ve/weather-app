async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '12630c390370d03995495c45341ea597'; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById('weatherResult').innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp}°F</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } else {
    document.getElementById('weatherResult').innerHTML = `<p>City not found.</p>`;
  }
}
