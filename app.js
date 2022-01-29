var express = require("express");

var path = require("path");

var routes = require("./routes")

var app = express();

var bodyParser = require("body-parser")

var session = require("express-session")

app.set("port",process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', routes);
app.use(express.static(__dirname + '/public'));

app.use('/', routes);
app.use(express.static(__dirname + '/nodelogin'));



// mysql connection
var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "inventory"
  });


// add product
const uniqueId = (length = 12) => {
    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""))
}

app.post('/productAdd', function (request, response) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected to add product!")
        var sql = `INSERT INTO products (id, name, qty, description, unit_cost,add_time) VALUES (${uniqueId()}, ${name}, ${qty},  ${description}, ${unitCost}, CURRENT_TIMESTAMP)`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            response.end();
        });
    });
    response.end();
});


app.listen(app.get("port"),function(){
    console.log("server started at port" + app.get("port"));
});