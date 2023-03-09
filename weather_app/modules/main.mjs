import * as data from "./weatherDb.mjs";

//Global Declarations
let defaultData = {
  location: "",
  lat: "0",
  lng: "0",
  condition: {
    //data
    windy: "0",
    text: "Sunny",
  },
  tempC: "30",
  tempF: "70",
  humidity: "50",
  feelslikeC: "30",
  feelslikeF: "70",
};

//remove
function removeData(location) {
  const result = data.weatherData.findIndex(
    (data) => data.location === location
  );
  data.weatherData.splice(result, 1);
  console.log("Removing Kolkata ", result);
}

removeData("Agra");
console.log("Calling remove :  ", data.weatherData);

//add
function addData(location) {
  defaultData.location = location;
  data.weatherData.push(defaultData);
}

addData("Agra");
console.log("Calling Add : ", data.weatherData);

//edit
function editData(location, tempC, tempF, humidity) {
  console.log(tempC, tempF, humidity);
  const findData = data.weatherData.find((data) => data.location === location);
  findData.tempC = tempC;
  findData.tempF = tempF;
  findData.humidity = humidity;
}

editData("Agra", "45", "90", "88");
console.log("Calling Edit : ", data.weatherData);
