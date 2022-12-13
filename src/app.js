/* 요소 추가 */
let app = document.querySelector("#app");
let cityBtn = document.querySelectorAll(".search-list button");
cityBtn.forEach((e) => {
  e.addEventListener("click", function () {
    let ulEl = document.createElement("ul");
    ulEl.setAttribute("class", `${e.className}`);
    ulEl.innerHTML = `
    <li class="icon-list">
      <span class="icon-desc"></span>
    </li>
    <li class="city-list">
      <span class="cityname"></span>
    </li>
    <li class="temp-list">
      <span class="temp"></span>
      <span class="feels-like"></span>
    </li>
    <li class="wind-list">
      <div class="wind">
        <span class="windarrow"><i class="fa-solid fa-arrow-up"></i></span>
      </div>
      <div class="wind-speed">
      </div>
    </li>
    <li class="humidity-list">
      <span class="humidity"></span>
    </li>
    `;
    app.appendChild(ulEl);
    e.remove();
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

/* 버튼 초기화 */
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
        e.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../src/images/${data.weather[0].main}.gif)`;
        e.children[0].children[0].innerHTML = data.weather[0].main;
        e.children[1].children[0].innerHTML = data.name;
        let mainTemp = data.main.temp - 273.15;
        e.children[2].children[0].innerHTML = `TEMP : ${mainTemp.toFixed(
          1
        )}&deg;`;
        let feelTemp = data.main.feels_like - 273.15;
        e.children[2].children[1].innerHTML = `Feel-TEMP : ${feelTemp.toFixed(
          1
        )}&deg;`;
        e.children[3].children[0].children[0].style.transform = `rotate(${data.wind.deg}deg)`;
        e.children[3].children[1].innerHTML = `WIND SPEED : ${data.wind.speed} m/s`;
        e.children[4].children[0].innerHTML = `HUMIDITY : ${data.main.humidity}%`;
      });
  });
}
showWeather();
