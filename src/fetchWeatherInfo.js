export async function getWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=M8ATNGCF4KGUSFTPQ3PA47DUU
`,
    { mode: "cors" },
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
