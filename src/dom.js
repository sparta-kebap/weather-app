export function displayCurrentWeather(data) {
  const mainContainer = document.querySelector(".main-container");

  const currentWeatherContainer = document.createElement("div");
  currentWeatherContainer.classList.add("current-weather-container");
  mainContainer.appendChild(currentWeatherContainer);

  const currentLocation = document.createElement("div");
  currentLocation.classList.add("current-location");
  currentLocation.textContent = `${data.address}`;
  currentWeatherContainer.appendChild(currentLocation);

  const currentTimeDate = document.createElement("div");
  currentTimeDate.classList.add("current-time-date");
  currentTimeDate.textContent = `${data.date}: ${data.time}`;
  currentWeatherContainer.appendChild(currentTimeDate);

  const currentTemp = document.createElement("div");
  currentTemp.classList.add("current-temp");
  currentTemp.textContent = `${data.temp}`;
  currentWeatherContainer.appendChild(currentTemp);

  const minMaxTemp = document.createElement("div");
  minMaxTemp.classList.add("min--max-temp");
  minMaxTemp.textContent = `${data.tempmin}/${data.tempmax}`;
  currentWeatherContainer.appendChild(minMaxTemp);

  const currentCondition = document.createElement("div");
  currentCondition.classList.add("current-condition");
  currentCondition.textContent = `${data.condition}`;
  currentWeatherContainer.appendChild(currentCondition);
}
