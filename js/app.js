'use strict';


const base_url = 'https://api.weatherbit.io/v2.0';

function handleGetWeather(event) {
  event.preventDefault();

  const cityName = event.target.city.value;
  $('#weather').html("");

  $('#weather').append(`<h2>Todays Weather for ${cityName}</h2>`);

  $.get(
    base_url +
      `/current?city=${cityName}&country=united+states&key=bf23ec25ba6649b296c16926690dacfe`,
    function (data) {
      console.log(data);

      const todaysWeather = data.data[0];
      console.log(todaysWeather.sunrise);
      console.log(todaysWeather.sunset);
      console.log(todaysWeather.weather.description);
      console.log(todaysWeather.weather.icon);

      $('#weather')
        .append(`<p>Sunrise: ${todaysWeather.sunrise}</p>`)
        .append(`<p>Sunset: ${todaysWeather.sunset}</p>`)
        .append(`<p>Current Weather: ${todaysWeather.weather.description}</p>`)
        .append(
          `<img src="https://cdn.weatherbit.io/static/img/icons/${todaysWeather.weather.icon}.png" alt="weather icon"></img>`
        );
    }
  );
}
