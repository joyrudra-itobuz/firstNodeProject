import * as fs from "fs/promises";
import * as fsNorm from "fs";
import * as path from "path";
import * as http from "http";

const dataWeather = "";

// const data = async () => {
//   try {
//     let fetchData = await fs.readFile(
//       "/Users/it012305/Documents/HTML CSS and JavaScript January/February/27.02.23 - 03.03.23/02.03.23/node_WeatherApp/weather_app/modules/weatherDb.csv",
//       "utf8"
//     );
//     dataWeather = JSON.parse(fetchData);
//   } catch (error) {
//     console.log(error);
//   }
// };

const data2 = JSON.parse(
  fsNorm.readFileSync(path.resolve("weatherDb.csv"), "utf8")
);

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // let q = url.parse(req.url, true);
    res.write("hi");
    res.end();
    // for (let i = 0; i < data2.length; i++) {
    //   if (data2[i].location == q.query.location) {
    //     console.log(data2[i]);
    //     res.write(JSON.stringify(data2[i]));
    //     res.end();
    //   }
    // }
  } else {
    res.write("Go With The about!");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
