let http = require("http");
let lib= require("./mixFunction")
let isPrime = `<h1>[${lib.getFivePrimeNumber()}]</h1>`;
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(isPrime);
  })
  .listen(3000);
