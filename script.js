let button = document.querySelector("button");
let searchText = document.querySelector("input");
button.addEventListener("click", GetWeatherData);

function GetWeatherData() {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&units=metric&APPID=e8f3e3d70148e6d6337f19cbec93b4ad`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let cityText = document.querySelector("#city");
      cityText.textContent = `${data.name} Weather`;
      let temperature = document.querySelector("#temprature");
      temperature.textContent = `${data.main.temp} ℃`;
      let iconImage = document.querySelector(".weatherStatus img");
      iconImage.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
      let wdesc = document.querySelector("#weatherDesc");
      wdesc.textContent = data.weather[0].main;
      let hum = document.querySelector("#humidity");
      let wspeed = document.querySelector("#windSpeed");
      hum.textContent = `Humidity: ${data.main.humidity}%`;
      wspeed.textContent = `wind Speed: ${data.wind.speed} km/h`;
    })
    .catch((error) => console.log(error));
}
