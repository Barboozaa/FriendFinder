var express = require("express");

var port = 3500;

var app = express();

app.use(express.static(__dirname + "/public"));

require("./app/routing/apiRoutes.html")(app);
require("./app/routing/htmlRoutes.html")(app);