//Date-Time
let now = new Date();

let h4 = document.querySelector("h4");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];

let day = days[now.getDay()];
let date = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h4.innerHTML = `${day}, ${date}/${month}/${year} </br> ${hours}:${minutes}`;

//Search bar and Current City
function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  console.log(searchInput.value);

  let city = document.querySelector("h3");

  if (searchInput.value) {
    city.innerHTML = `${searchInput.value}`;
  } else {
    city.innerHTML = `Enter a city...`;
  }

  //WEEK 5 HOMEWORK PART 1
  apiKey = "1a915758c5fb84c9ee7377f6039e76a7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${apiKey}`;

  console.log(apiUrl);

  function temp(event) {
    event.preventDefault();

    let cityTemp = document.querySelector("#current-temp");
    cityTemp.innerHTML = `${searchedInput.value}`;
  }

  function temp(response) {
    let temp = Math.ceil(response.data.main.temp);

    let currentTemp = document.querySelector("#current-temp");
    currentTemp.innerHTML = `${temp}`;
  }

  let searchedTemp = document.querySelector("#current-temp");
  searchedTemp.addEventListener("submit", temp);

  axios.get(apiUrl).then(temp);
}

let form = document.querySelector("#search-bar");

form.addEventListener("submit", search);

let searchedCity = document.querySelector("#search-input");
console.log(searchedCity.value);

let apiKey = "1a915758c5fb84c9ee7377f6039e76a7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=1a915758c5fb84c9ee7377f6039e76a7`;
console.log(apiUrl);

function showWeather(response) {
  let temp = Math.ceil(response.data.main.temp);

  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${temp}`;
}

axios.get(apiUrl).then(showWeather);

//PART 2 (Needs revision)

function showPosition(position) {
  console.log(position);

  console.log(position.coords.longitude);
  console.log(position.coords.latitude);

  let currentLongitude = position.coords.longitude;

  let currentLatitude = position.coords.latitude;

  let longLat = `${currentLongitude} & ${currentLatitude}`;
  console.log(longLat);

  navigator.geolocation.getCurrentPosition(showPosition);

  apiKey = "1a915758c5fb84c9ee7377f6039e76a7";
  let apiUrlLongLat = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&units=metric&appid=${apiKey}`;

  function currentTemp(response) {
    let temp = Math.ceil(response.data.main.temp);

    let currentTemp = document.querySelector("#current-temp");
    currentTemp.innerHTML = `${temp}`;
  }

  let currentCityButton = document.querySelector("#add-city");

  currentCityButton.addEventListener("click", showPosition);

  axios.get(apiUrlLongLat).then(currentTemp);
}
