const http = require("http");
const path = require("path");
const fs = require("fs");

let dataPath = path.resolve() + "/api/" + "weatherDb.csv";

const port = 8080;

const weatherDb = JSON.parse(
  fs.readFileSync(dataPath, { encoding: "utf-8" }, (err, data) => {
    try {
      return data;
    } catch {
      console.log(err);
    }
  })
);

const server = http.createServer((req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.write(JSON.stringify(weatherDb));
    res.end();
  } catch (err) {
    console.error(err);
  }
});

server.listen(port, () => {
  console.log("Server Running on 127.0.0.1:" + port);
});
