$(document).ready(function () {
  const apiKey = "fc65a0940ea994aa000bf6c3eaca17d2"; // Replace with your API key--for testing fc65a0940ea994aa000bf6c3eaca17d2
  const city = "Mumbai"; // Default city
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch weather data
  function fetchWeather() {
    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function (data) {
        $("#city-name").text(data.name);
        $("#temp").text(Math.round(data.main.temp));
        $("#humidity").text(data.main.humidity);
        $("#wind").text(data.wind.speed);
        $("#weather-icon").attr(
          "src",
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
        console.log(data);
      },
      error: function () {
        alert("Failed to fetch weather data.");
      },
    });
  }

  // Initial fetch
  fetchWeather();

  // Refresh button click
  $("#refresh-btn").click(function () {
    fetchWeather();
    $(this).css("transform", "rotate(360deg)");
    setTimeout(() => {
      $(this).css("transform", "rotate(0deg)");
    }, 300);
  });
});
