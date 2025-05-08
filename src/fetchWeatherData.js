export async function getWeatherData(location, unit) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=M8ATNGCF4KGUSFTPQ3PA47DUU&contentType=json

`,
      { mode: "cors" },
    );
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function processData(data) {
  let processedData = {};
  processedData.address = data.resolvedAddress;
  processedData.condition = data.currentConditions.conditions;
  processedData.temp = data.days[0].temp;
  processedData.tempmax = data.days[0].tempmax;
  processedData.tempmin = data.days[0].tempmin;
  processedData.time = data.currentConditions.datetime;
  processedData.date = data.days[0].datetime;
  processedData.icon = data.currentConditions.icon;
  processedData.nightIcon = data.days[0].hours[0].icon;
  processedData.nightTemp = data.days[0].hours[0].temp;
  processedData.morningIcon = data.days[0].hours[6].icon;
  processedData.morningTemp = data.days[0].hours[6].temp;
  processedData.dayIcon = data.days[0].hours[12].icon;
  processedData.dayTemp = data.days[0].hours[12].temp;
  processedData.eveningIcon = data.days[0].hours[18].icon;
  processedData.eveningTemp = data.days[0].hours[18].temp;

  processedData.days = [];
  for (let i = 0; i <= 7; i++) {
    processedData.days[i] = {};
    processedData.days[i].icon = data.days[i].icon;
    processedData.days[i].date = data.days[i].datetime;
    processedData.days[i].tempmin = data.days[i].tempmin;
    processedData.days[i].tempmax = data.days[i].tempmax;
  }

  return processedData;
}

export const selectUnit = () => {
  const toggleSwitch = document.querySelector("#unit-toggle");

  if (toggleSwitch.checked) {
    const unit = "us";
    console.log(`current unit is ${unit}`);
    return unit;
  } else {
    const unit = "metric";
    console.log(`current unit is ${unit}`);
    return unit;
  }
};
