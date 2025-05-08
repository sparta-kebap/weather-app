export async function displayCurrentWeather(data, unit) {
  let selectedUnit = unit === "metric" ? "°C" : "°F";

  const currentWeatherContainer = document.querySelector(
    ".current-weather-container",
  );
  currentWeatherContainer.classList.remove("display-hidden");

  const currentLocation = document.createElement("div");
  currentLocation.classList.add("current-location");
  currentLocation.textContent = `${data.address}`;
  currentWeatherContainer.appendChild(currentLocation);

  const currentTimeDate = document.createElement("div");
  currentTimeDate.classList.add("current-time-date");
  currentTimeDate.textContent = `${data.date}: ${data.time}`;
  currentWeatherContainer.appendChild(currentTimeDate);

  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("weather-icon");
  const weatherIconTempHolder = document.createElement("div");
  weatherIconTempHolder.classList.add("weather-icon-temp-holder");
  currentWeatherContainer.appendChild(weatherIconTempHolder);

  try {
    const icon = await selectWeatherIcon(data.icon);
    weatherIcon.src = `./assets/${data.icon}.svg`;
  } catch (error) {
    console.log(error);
    return null;
  }

  const currentTemp = document.createElement("div");
  currentTemp.classList.add("current-temp");
  currentTemp.innerHTML = `${data.temp}<span style="font-size: 24px;">${selectedUnit}</span>`;
  weatherIconTempHolder.appendChild(currentTemp);
  weatherIconTempHolder.appendChild(weatherIcon);

  const minMaxTemp = document.createElement("div");
  minMaxTemp.classList.add("min--max-temp");
  minMaxTemp.textContent = `${data.tempmin}${selectedUnit}/${data.tempmax}${selectedUnit}`;
  currentWeatherContainer.appendChild(minMaxTemp);

  const currentCondition = document.createElement("div");
  currentCondition.classList.add("current-condition");
  currentCondition.textContent = `${data.condition}`;
  currentWeatherContainer.appendChild(currentCondition);
}

export const clearCurrentDisplay = () => {
  const currentWeatherContainer = document.querySelector(
    ".current-weather-container",
  );
  currentWeatherContainer.innerHTML = "";

  const mainContainer = document.querySelector(".main-container");
  const weekWeatherDisplay = document.querySelector(".week-weather-display");
  if (weekWeatherDisplay) {
    weekWeatherDisplay.innerHTML = "";
    mainContainer.removeChild(weekWeatherDisplay);
  }
};

export const errorDisplay = () => {
  const currentWeatherContainer = document.querySelector(
    ".current-weather-container",
  );
  currentWeatherContainer.classList.remove("display-hidden");
  const errorDisplay = document.createElement("div");
  errorDisplay.classList.add("error-display");
  errorDisplay.textContent = "No location found. Please try again.";
  currentWeatherContainer.appendChild(errorDisplay);
};

export const selectWeatherIcon = async (icon) => {
  try {
    const iconSrc = await import(`./assets/${icon}.svg`);
    return iconSrc;
  } catch (error) {
    console.log(error);
  }
};

export async function displayToday(data, unit) {
  let selectedUnit = unit === "metric" ? "°C" : "°F";
  const currentWeatherContainer = document.querySelector(
    ".current-weather-container",
  );
  const todayWeatherDisplay = document.createElement("div");
  todayWeatherDisplay.classList.add("today-weather-display");

  const nightIcon = document.createElement("img");
  nightIcon.classList.add("weather-icon");
  try {
    const icon = await selectWeatherIcon(data.nightIcon);
    nightIcon.src = `./assets/${data.nightIcon}.svg`;

    const todayWeatherDisplayColumn = document.createElement("div");
    todayWeatherDisplayColumn.classList.add("icon-display-column");
    todayWeatherDisplay.appendChild(todayWeatherDisplayColumn);
    const todayWeatherDisplayLabel = document.createElement("span");
    todayWeatherDisplayLabel.textContent = "Night";
    const todayWeatherDisplayTemp = document.createElement("span");
    todayWeatherDisplayTemp.textContent = `${data.nightTemp}${selectedUnit}`;

    todayWeatherDisplayColumn.appendChild(todayWeatherDisplayLabel);
    todayWeatherDisplayColumn.appendChild(nightIcon);
    todayWeatherDisplayColumn.appendChild(todayWeatherDisplayTemp);
  } catch (error) {
    console.log(error);
    return null;
  }

  const morningIcon = document.createElement("img");
  morningIcon.classList.add("weather-icon");
  try {
    const icon = await selectWeatherIcon(data.morningIcon);
    morningIcon.src = `./assets/${data.morningIcon}.svg`;

    const todayWeatherDisplayColumn = document.createElement("div");
    todayWeatherDisplayColumn.classList.add("icon-display-column");
    todayWeatherDisplay.appendChild(todayWeatherDisplayColumn);
    const todayWeatherDisplayLabel = document.createElement("span");
    todayWeatherDisplayLabel.textContent = "Morning";
    const todayWeatherDisplayTemp = document.createElement("span");
    todayWeatherDisplayTemp.textContent = `${data.morningTemp}${selectedUnit}`;

    todayWeatherDisplayColumn.appendChild(todayWeatherDisplayLabel);
    todayWeatherDisplayColumn.appendChild(morningIcon);
    todayWeatherDisplayColumn.appendChild(todayWeatherDisplayTemp);
  } catch (error) {
    console.log(error);
    return null;
  }

  const dayIcon = document.createElement("img");
  dayIcon.classList.add("weather-icon");
  try {
    const icon = await selectWeatherIcon(data.dayIcon);
    dayIcon.src = `./assets/${data.dayIcon}.svg`;

    const todayWeatherDisplayColumn = document.createElement("div");
    todayWeatherDisplayColumn.classList.add("icon-display-column");
    todayWeatherDisplay.appendChild(todayWeatherDisplayColumn);
    const todayWeatherDisplayLabel = document.createElement("span");
    todayWeatherDisplayLabel.textContent = "Day";
    const todayWeatherDisplayTemp = document.createElement("span");
    todayWeatherDisplayTemp.textContent = `${data.dayTemp}${selectedUnit}`;

    todayWeatherDisplayColumn.appendChild(todayWeatherDisplayLabel);
    todayWeatherDisplayColumn.appendChild(dayIcon);
    todayWeatherDisplayColumn.appendChild(todayWeatherDisplayTemp);
  } catch (error) {
    console.log(error);
    return null;
  }

  const eveningIcon = document.createElement("img");
  eveningIcon.classList.add("weather-icon");
  try {
    const icon = await selectWeatherIcon(data.eveningIcon);
    eveningIcon.src = `./assets/${data.eveningIcon}.svg`;

    const todayWeatherDisplayColumn = document.createElement("div");
    todayWeatherDisplayColumn.classList.add("icon-display-column");
    todayWeatherDisplay.appendChild(todayWeatherDisplayColumn);
    const todayWeatherDisplayLabel = document.createElement("span");
    todayWeatherDisplayLabel.textContent = "Evening";
    const todayWeatherDisplayTemp = document.createElement("span");
    todayWeatherDisplayTemp.textContent = `${data.eveningTemp}${selectedUnit}`;

    todayWeatherDisplayColumn.appendChild(todayWeatherDisplayLabel);
    todayWeatherDisplayColumn.appendChild(eveningIcon);
    todayWeatherDisplayColumn.appendChild(todayWeatherDisplayTemp);
  } catch (error) {
    console.log(error);
    return null;
  }

  currentWeatherContainer.appendChild(todayWeatherDisplay);
}

export async function displayWeek(data, unit) {
  let selectedUnit = unit === "metric" ? "°C" : "°F";
  const mainContainer = document.querySelector(".main-container");
  const weekWeatherDisplay = document.createElement("div");
  weekWeatherDisplay.classList.add("week-weather-display");
  mainContainer.appendChild(weekWeatherDisplay);

  //const weekWeatherArr = data.days
  for (let i = 1; i < data.days.length; i++) {
    const weatherIcon = document.createElement("img");
    weatherIcon.classList.add("weather-icon");
    try {
      const icon = await selectWeatherIcon(data.days[i].icon);
      weatherIcon.src = `./assets/${data.days[i].icon}.svg`;

      const weekWeatherDisplayColumn = document.createElement("div");
      weekWeatherDisplayColumn.classList.add("icon-display-column");
      weekWeatherDisplay.appendChild(weekWeatherDisplayColumn);
      const weekWeatherDisplayLabel = document.createElement("span");
      weekWeatherDisplayLabel.textContent = `${data.days[i].date}`;
      const weekWeatherDisplayTemp = document.createElement("span");
      weekWeatherDisplayTemp.textContent = `${data.days[i].tempmin}/${data.days[i].tempmax}${selectedUnit}`;

      weekWeatherDisplayColumn.appendChild(weekWeatherDisplayLabel);
      weekWeatherDisplayColumn.appendChild(weatherIcon);
      weekWeatherDisplayColumn.appendChild(weekWeatherDisplayTemp);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
