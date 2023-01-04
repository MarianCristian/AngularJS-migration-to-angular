var express = require('express');
var app = express();
app.use(express.static("src"));
app.get('/', function (req, res,next) {
 
});
app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080");