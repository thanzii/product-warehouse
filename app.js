var express = require("express");

var path = require("path");

var routes = require("./routes")

var app = express();

app.set("port",process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', routes);
app.use(express.static(__dirname + '/public'));

app.listen(app.get("port"),function(){
    console.log("server started at port" + app.get("port"));
});