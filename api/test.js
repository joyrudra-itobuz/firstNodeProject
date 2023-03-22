const http = require("http");
const fs = require("fs");

const weatherDb = JSON.parse(
  fs.readFileSync("weatherDb.csv", { encoding: "utf-8" }, (err, data) => {
    return data;
  })
);

// console.log(weatherDb);

const reqLocation = (reqUrl) => {
  const location = JSON.stringify(
    weatherDb.find(
      (data) => data.location === reqUrl,
      (err) => {
        return -1;
      }
    )
  );
  console.log("reqLocation() = ", location);
  return location;
};

const server = http.createServer((req, res) => {
  res.end(req.url);

  const reqUrl = req.url.substring(1, req.url.length);
  console.log(reqUrl);
  if (reqUrl != "favicon.ico") {
    console.log(reqUrl);
    res.write(reqLocation(reqUrl));
    res.end();
  } else {
    res.write(reqLocation(reqUrl));
    res.end();
  }
  //   console.log("reqURL: ", reqUrl);
  //   console.log("2", req.url, "\n");
  //   if (reqLocation(reqUrl) != -1) {
  //     console.log(reqUrl);
  //     res.write(reqLocation(reqUrl));
  //     res.end();
  //   } else {
  //     res.write(reqLocation(reqUrl));
  //     res.end();
  //   }
  //   if (req.url == "/hi") {
  //     res.write("Hi");
  //     res.end();
  //   } else if (req.url == "/Kolkata") {
  //     const data = JSON.stringify(weatherDb[0].tempC);
  //     res.write(JSON.stringify(weatherDb[0]));
  //     // res.write(data);
  //     res.end();
  //   } else {
  //     res.write("Bye");
  //     res.end();
  //   }
});

const host = "127.0.0.1";
const port = "8080";

server.listen(port, () => {
  console.log("Server is running on http://127.0.0.1:8080 ");
});
