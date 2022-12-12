// const API_KEY = "ff1e91436438f0f1fc316ab298379047";
// let city_name = "seoul";
// let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

// function getWeatherData(cityname = "seoul") {
//   // 도시명 업데이트
//   city_name = cityname;
//   API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

//   fetch(API_URL)
//     .then(function (응답데이터) {
//       return 응답데이터.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       showWeather(data);
//     });
// } // getWeatherData

// function showWeather(data) {
//   const desc = data.weather[0].main; // 날씨상태 설명
//   const weather_icon = data.weather[0].icon; // 아이콘
//   const temp = parseInt(data.main.temp - 273.15); // 현재온도
//   const name = data.name; // 도시명
//   console.log(name, desc, weather_icon, temp);

//   // UI 출력(DOM)
//   const citynameEl = document.querySelector(".cityname");
//   const iconEl = document.querySelector(".icon");
//   const tempEl = document.querySelector(".temp");
//   const descEl = document.querySelector(".desc");

//   citynameEl.textContent = name;
//   iconEl.innerHTML = `<img src='http://openweathermap.org/img/wn/${weather_icon}@2x.png' alt='아이콘'/>`;
//   tempEl.innerHTML = temp;
//   descEl.textContent = desc;
// }

// // 날씨 함수 호출
// getWeatherData();

// // 선택목록(도시명) 변경 이벤트
// const select = document.getElementById("select");
// select.addEventListener("change", function (e) {
//   const cityname = e.target.value;
//   getWeatherData(cityname);
// });

// // 응용
// // 1. 날씨나 시간대(주간/야간)에 따라 배경 연출 바꾸기
// // 2. 아이콘을 다른 것으로 변경
// // 3. 기타 등등
