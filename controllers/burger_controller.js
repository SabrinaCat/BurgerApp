const express = require("express");
const router = express.Router();
//import to use burger functions
const burger = require("../models/burger.js");

//create routes for each function to later render the response with handlebars
//this route returns all burger data
router.get("/", function(req, res) {
  burger.selectAllBurger(function(data){
    const hbsObject = {
      burgers : data
    };
    console.log(hbsObject);
    //render later in index.handlebars
    res.render("index", hbsObject);
  });
});
//this route will POST using our insertBurger function
router.post("/api/burgers", function (req, res){
  burger.createBurger(["burger_name"])
})


