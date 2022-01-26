var express = require("express");

const posts = [

    {
        id: 1,
        author: 'John',
        title: 'Templating with pug',
        body: 'Blog post 1'
    },

    {
        id: 2,
        author: 'Peter',
        title: 'React: Js from scratch',
        body: 'Blog post 2'
    },

    {
        id: 3,
        author: 'Violet',
        title: 'Node.js Streams',
        body: 'Blog post 3'
    },

    {
        id: 4,
        author: 'Condy',
        title: 'Node.js Events',
        body: 'Blog post 4'
    }

]



var router = express.Router();

router.get("/",function(req,res){
    res.render("index");
    console.log("start page")
});

router.get('/product', function (req, res, next) {
    res.render('product', {posts: posts});
});

router.get('/warehouse', function (req, res, next) {
    res.render('warehouse', {posts: posts});
});

router.get('/aboutus', function (req, res, next) {
    res.render("aboutus");
    console.log("about page")
});


module.exports = router;