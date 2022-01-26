var express = require("express");


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtXTW_8qHGC1jsue8W54wq9PIWoHgKXDQ",
  authDomain: "product-warehouse-2b583.firebaseapp.com",
  projectId: "product-warehouse-2b583",
  storageBucket: "product-warehouse-2b583.appspot.com",
  messagingSenderId: "306214851677",
  appId: "1:306214851677:web:0158f1555f46fb476f69b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of products from your database
async function getProducts(db) {
  const productsCol = collection(db, 'products');
  const productSnapshot = await getDocs(productsCol);
  const productList = productSnapshot.docs.map(doc => doc.data());
  return productList;
}

const products = getProducts(db)

console.log(products)


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