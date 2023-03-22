const http = require("http");
const { json } = require("stream/consumers");

const port = 200;

const demoObj = {
  data: {
    location: "kolkata",
  },
  satus: "sucess",
  message: "passed",
};

function getRequestData(req) {
  if (req.url == "/") {
    return req;
  } else {
  }
}

const ourServer = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
  }
  res.writeHead(200, { "Content-Type": "applicaion" });
  res.end(getRequestData("Joy"));
  res.end(JSON.stringify(demoObj));
});

ourServer.listen(port, () => {
  console.log("port ....   ", port);
});
