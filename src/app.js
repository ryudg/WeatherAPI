const API_KEY = "ff1e91436438f0f1fc316ab298379047";
let CITY_NAME = "korea";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;

const citynameEl = document.querySelector(".cityname");
const iconElimg = document.querySelector(".iconImg");
const tempEl = document.querySelector(".temp");
const descEl = document.querySelector(".desc");

fetch(API_URL)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const desc = data.weather[0].main;
    const weather_icon = data.weather[0].icon;
    const city = data.name;
    const temp = data.main.temp - 273.15;

    citynameEl.textContent = city;
    iconElimg.src = `http://openweathermap.org/img/wn/${weather_icon}@2x.png`;
    tempEl.textContent = temp.toFixed(2);
    descEl.textContent = desc;
  });
