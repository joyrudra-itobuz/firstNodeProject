const http = require("http");

const hostName = "127.0.0.1";
const port = 3080;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello Beautiful World\n");
});

server.listen(port, hostName, () => {
  console.log(`Server running at : http://${hostName}:${port}/`);
});
