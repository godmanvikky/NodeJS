let http = require("http");
let form = `<div style="width:500px; height:500px;margin:300px auto;">
<form>
<label>Username</label>    
<input type="text" style='display:block;'>
<label>Password</label>
<input type="password" style='display:block;'>
<button style="margin:20px auto">Login</button>
</form></div>`;
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(form);
  })
  .listen(3000);
