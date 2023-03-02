function getWeather() {
  const weatherData = [
    {
      location: "kolkata",
      lat: "22",
      lng: "12",
      condition: {
        //data
        windy: "0",
        text: "clear",
      },
      feelslike_c: "32",
      feelslike_f: "89",
      humidity: "86",
    },
  ];

  const result = weatherData.find((data) => data.location === "kolkata");
  return result;
}

console.log(getWeather());
