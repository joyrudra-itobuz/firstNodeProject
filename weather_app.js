function getWeather(location) {
  const weatherData = [
    {
      location: "Kolkata",
      lat: "22",
      lng: "12",
      condition: {
        //data
        windy: "0",
        text: "clear",
      },
      temp_c: "33",
      temp_f: "91.4",
      humidity: "86",
      feelslike_c: "30.9",
      feelslike_f: "87.5",
    },
    {
      location: "Agra",
      lat: "82.5",
      lng: "22.5",
      condition: {
        //data
        windy: "0",
        text: "Sunny",
      },
      temp_c: "45",
      temp_f: "95",
      humidity: "16",
      feelslike_c: "10.9",
      feelslike_f: "17.5",
    },
    {
      location: "Delhi",
      lat: "23",
      lng: "13",
      condition: {
        //data
        windy: "0",
        text: "Overcast",
      },
      temp_c: "56",
      temp_f: "78",
      humidity: "87",
      feelslike_c: "30.11",
      feelslike_f: "87.90",
    },
    {
      location: "Mumbai",
      lat: "45",
      lng: "12",
      condition: {
        //data
        windy: "1",
        text: "Clear",
      },
      temp_c: "23",
      temp_f: "61.4",
      humidity: "23",
      feelslike_c: "40.9",
      feelslike_f: "67.5",
    },
    {
      location: "Chennai",
      lat: "58",
      lng: "20",
      condition: {
        //data
        windy: "1",
        text: "Sunny",
      },
      temp_c: "37",
      temp_f: "97.4",
      humidity: "56",
      feelslike_c: "60.12",
      feelslike_f: "45.12",
    },
    {
      location: "Krishnanagar",
      lat: "22",
      lng: "12",
      condition: {
        //data
        windy: "0",
        text: "clear",
      },
      temp_c: "31",
      temp_f: "66",
      humidity: "56",
      feelslike_c: "32.9",
      feelslike_f: "84.5",
    },
    {
      location: "Barasat",
      lat: "0",
      lng: "0",
      condition: {
        //data
        windy: "0",
        text: "Rainy",
      },
      temp_c: "35",
      temp_f: "71.8",
      humidity: "86",
      feelslike_c: "30.9",
      feelslike_f: "87.5",
    },
    {
      location: "London",
      lat: "45",
      lng: "34",
      condition: {
        //data
        windy: "0",
        text: "Cloudy",
      },
      temp_c: "33",
      temp_f: "81.8",
      humidity: "86",
      feelslike_c: "28",
      feelslike_f: "87.45",
    },
    {
      location: "Kashmir",
      lat: "56",
      lng: "66",
      condition: {
        //data
        windy: "0",
        text: "Clear",
      },
      temp_c: "33.3",
      temp_f: "71.12",
      humidity: "76",
      feelslike_c: "19.9",
      feelslike_f: "45.78",
    },
    {
      location: "New York",
      lat: "45",
      lng: "70",
      condition: {
        //data
        windy: "0",
        text: "Clear",
      },
      temp_c: "37",
      temp_f: "74.44",
      humidity: "35",
      feelslike_c: "9.9",
      feelslike_f: "65.78",
    },
    {
      location: "Antarctica",
      lat: "90",
      lng: "90",
      condition: {
        //data
        windy: "1",
        text: "Cloudy",
      },
      temp_c: "45.5",
      temp_f: "100.5",
      humidity: "99",
      feelslike_c: "60",
      feelslike_f: "120",
    },
  ];

  const result = weatherData.find((data) => data.location === location);
  return result;
}

console.log(getWeather("Delhi"));
