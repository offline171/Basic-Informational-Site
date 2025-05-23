var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname + ".html";
  if(q.pathname === "/"){
    filename = "./index.html";
  }
  fs.readFile(filename, function(err, data) {
    if (err) {  
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(fs.readFileSync("404.html", "utf-8", (err,data) => {
        if (err) throw err;
        return data;
      }));
      return res.end();
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

