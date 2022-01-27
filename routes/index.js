var express = require("express");

var mysql = require("mysql")

var products

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "inventory"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
     products = result ;
  });
});


var router = express.Router();

router.get("/",function(req,res){
    res.render("index");
    console.log("start page")
});

router.get('/product', function (req, res, next) {
    res.render('product', {products: products});
});

router.get('/warehouse', function (req, res, next) {
    res.render('warehouse', {products: products});
});

router.get('/aboutus', function (req, res, next) {
    res.render("aboutus");
    console.log("about page")
});


module.exports = router;