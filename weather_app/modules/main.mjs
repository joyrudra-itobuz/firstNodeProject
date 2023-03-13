// import * as data from "./weatherDb.mjs";
import * as fs from "fs";
import * as path from "path";

const dbLocation = "./weatherDb.csv";
const weatherDbPath = path.basename(dbLocation);

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

let weatherData = "";

// import * as fs2 from "fs/promises";

// async function readFile() {
//   try {
//     const data = await fs2.readFile("server.java", {
//       encoding: "utf8",
//     });
//     weatherData = JSON.parse(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// readFile();

// fs.readFile("weatherDb.csv", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   weatherData = JSON.parse(data);
// });

console.log("Starts!");

try {
  const data = fs.readFileSync(path.resolve("weatherDb.csv"), "utf8");
  weatherData = JSON.parse(data);
  console.log(data);
} catch (err) {
  console.error(err);
}

console.log(weatherData);

// //remove
// function removeData(location) {
//   const result = data.weatherData.findIndex(
//     (data) => data.location === location
//   );
//   data.weatherData.splice(result, 1);
//   console.log("Removing Kolkata ", result);
// }

// removeData("Agra");
// console.log("Calling remove :  ", data.weatherData);

// //add
// function addData(location) {
//   defaultData.location = location;
//   data.weatherData.push(defaultData);
// }

// addData("Agra");
// console.log("Calling Add : ", data.weatherData);

// //edit
// function editData(location, tempC, tempF, humidity) {
//   console.log(tempC, tempF, humidity);
//   const findData = data.weatherData.find((data) => data.location === location);
//   findData.tempC = tempC;
//   findData.tempF = tempF;
//   findData.humidity = humidity;
// }

//remove
function removeData(location) {
  const result = weatherData.findIndex((data) => data.location === location);
  weatherData.splice(result, 1);
  console.log("Removing Kolkata ", result);
}

removeData("Agra");
console.log("Calling remove :  ", weatherData);

//add
function addData(location) {
  defaultData.location = location;
  weatherData.push(defaultData);
}

addData("Agra");
console.log("Calling Add : ", weatherData);

//edit
function editData(location, tempC, tempF, humidity) {
  console.log(tempC, tempF, humidity);
  const findData = weatherData.find((data) => data.location === location);
  findData.tempC = tempC;
  findData.tempF = tempF;
  findData.humidity = humidity;
}

editData("Agra", "45", "90", "88");
console.log("Calling Edit : ", weatherData);

// fs.writeFile("weatherDb.csv", JSON.stringify(weatherData), (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Written!");
// });

try {
  fs.writeFileSync(path.resolve("weatherDb.csv"), JSON.stringify(weatherData));
  console.log("Written via Sync");
} catch (err) {
  console.error(err);
}

let name = "Joy";

console.warn(`Danger ${name}! Danger!`);
