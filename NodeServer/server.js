let express = require("express");
let bodyParser = require("body-parser");
let http = require("http");
let app = express();
app.use(bodyParser.json());
// app.listen(5000, function() {
//     console.log("Listening on port 5000;");
// });
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
