function printTodayDate() {
  return new Date().toDateString();
}
let http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`<h1>${printTodayDate()}</h1>`);
  })
  .listen(70);
