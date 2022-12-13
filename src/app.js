/* 요소 추가 */
let app = document.querySelector("#app");
let cityBtn = document.querySelectorAll(".search-list button");
cityBtn.forEach((b) => {
  b.addEventListener("click", function () {
    let ulEl = document.createElement("ul");
    ulEl.setAttribute("class", `${b.className}`);
    ulEl.innerHTML = `
    <li class="icon-list">
    <span class="icon-desc">Weather Desc</span>
  </li>
  <li class="city-list"><span class="cityname">Seoul</span></li>
  <li class="temp-list">
    <span class="temp">55&deg;</span>
    <span class="maxtemp">MAX : 60&deg;</span>
    <span class="mintemp">MIN : -10&deg;</span>
  </li>
  <li class="wind-list">
    <div class="wind">
      <span class="windarrow"><i class="fa-solid fa-arrow-up"></i></span>
    </div>
    <div class="wind-speed"></div>
  </li>
  <li class="humidity-list"><span class="humidity">55%</span></li>
    `;
    app.appendChild(ulEl);
    b.remove();
    showWeather();
    let search = document.querySelector("#search");
    search.value = "";
  });
});

/* 검색기능 */
function filter() {
  let search = document.querySelector("#search").value.toLowerCase();
  console.log(search);
  let cityName = document.querySelectorAll(".search-list button");
  for (let i = 0; i < cityName.length; i++) {
    if (cityName[i].className.includes(search)) {
      cityName[i].style.display = "block";
    } else {
      cityName[i].style.display = "none";
    }
  }
}
filter();

let bodyEl = document.querySelector(".body");
let cityName = document.querySelectorAll(".search-list button");
bodyEl.addEventListener("click", function () {
  for (let i = 0; i < cityName.length; i++) {
    cityName[i].style.display = "none";
  }
});

/* 날씨 변경 */
function showWeather() {
  const API_KEY = "b68177078f5cb7c53e861421586aee13";
  let city = document.querySelectorAll("#app ul");
  city.forEach((e, index) => {
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${e.className}&appid=${API_KEY}`;
    console.log(API_URL);
    fetch(API_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        e.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../src/images/${data.weather[0].main}.jpg)`;
        e.children[0].children[0].innerHTML = data.weather[0].main;
        e.children[1].children[0].innerHTML = data.name;
        e.children[2].children[0].innerHTML = `Temp : ${parseInt(
          data.main.temp - 273.15
        )}&deg;`;
        e.children[2].children[1].innerHTML = `MIN : ${parseInt(
          data.main.temp_min - 273.15
        )}&deg;`;
        e.children[2].children[2].innerHTML = `MAX : ${parseInt(
          data.main.temp_max - 273.15
        )}&deg;`;
        e.children[3].children[0].children[0].style.transform = `rotate(${data.wind.deg}deg)`;
        e.children[3].children[1].innerHTML = `WIND SPEED : ${data.wind.speed} m/s`;
        e.children[4].children[0].innerHTML = `HUMIDITY : ${data.main.humidity}%`;
      });
  });
}
showWeather();
