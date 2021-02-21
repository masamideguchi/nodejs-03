var http = require("http");
var fs = require("fs");
var ejs = require("ejs");

const index_page = fs.readFileSync("./index.ejs", "utf8");

//create a server object:
http
  .createServer(function (req, res) {
    var content = ejs.render(index_page);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(content); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
