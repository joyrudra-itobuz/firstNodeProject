// const e = require("express");
const http = require("http");
var port = 2000;

const data = {
  data: {
    location: "kolkata",
  },
  name: "visal",
  age: "OK",
};

function getRoutesBasedData(route, data) {
  let status = 200;
  console.log("route", route);
  return JSON.stringify({
    apiData: data,
    status,
    route,
    message: "hey i am running ...",
  });
}

function getRequestData(req) {
  if (req.url === "/") {
    return getRoutesBasedData(req.url, data);
  } else if (req.url === "/name") {
    return getRoutesBasedData(req.url, data);
  } else {
    return getRoutesBasedData("NOT FOUND", data);
  }
}

const ourServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/txt" });
  res.end(getRequestData(req));
});

ourServer.listen(port, () => {
  console.log("port ... ", port);
});
