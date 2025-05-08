import "./styles.css";
import { getWeatherData, processData, selectUnit } from "./fetchWeatherData.js";
import {
  displayCurrentWeather,
  clearCurrentDisplay,
  displayToday,
  displayWeek,
  errorDisplay,
} from "./display.js";

const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#mySearch");
const toggleSwitch = document.querySelector("#unit-toggle");
let processedData = "";

toggleSwitch.addEventListener("change", () => {
  const unit = selectUnit();
  //const query = searchInput.value.trim();
  if (processedData !== "") {
    const query = processedData.address;
    searchLocation(query, unit);
  }
  return;
});

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const unit = selectUnit();
  const query = searchInput.value.trim();
  if (query) {
    searchLocation(query, unit);
  } else {
    alert("Please enter a location."); // Alert user if search input is empty
  }
});

async function searchLocation(location, unit) {
  const newData = await getWeatherData(location, unit);
  if (!newData) {
    console.log("no location found.");
    clearCurrentDisplay();
    errorDisplay();
    return;
  }
  console.log(newData);
  const newProcessedData = processData(newData);
  console.table(newProcessedData);
  clearCurrentDisplay();

  displayCurrentWeather(newProcessedData, unit);
  displayToday(newProcessedData, unit);
  displayWeek(newProcessedData, unit);
  processedData = newProcessedData;
}
