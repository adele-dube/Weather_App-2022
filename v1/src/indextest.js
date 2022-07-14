//PART 1
/*function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  console.log(searchInput.value);

  let city = document.querySelector("h3");

  if (searchInput.value) {
    city.innerHTML = `${searchInput.value}`;
  } else {
    city.innerHTML = `Enter a city...`;
  }
  //
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
let searchForm = document.querySelector("#search-bar");

searchForm.addEventListener("submit", search);*/
