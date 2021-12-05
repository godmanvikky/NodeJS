let http= require("http");
const url= require("url");
http.createServer(function(request,response){
    let qureyObject=url.parse(request.url,true).query;
    console.log(qureyObject)
    response.writeHead(200,{"Content-Type":"text/html"});
    response.end(`<h1>${qureyObject.a}</h1>`);
}).listen(8080)
