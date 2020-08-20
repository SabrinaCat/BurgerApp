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
    //render later in main.handlebars
    res.render("main", hbsObject);
  });
});
//this route will POST using our CreateBurger function
router.post("/api/burger_eats", function (req, res){
  burger.createBurger(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
//return id of new burger
console.log(res);
    res.json({ id: result.insertId });
  });
});
//update burger with PUT (how we change devoured from false to true)
router.put("api/burger_eats/:id", function (req,res) {
  let condition = "id = " + req.params.id;
  //log the id
  console.log("condition", condition);
  burger.updateBurger({ devoured: req.body.devoured }, condition, function (result){
  //if no burgers were changed then return error otherwise the response is 200 message
    if (result.changedRows ===0) {
      return res.status(404).end()
    }
    res.status(200).end();
  });
  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

});
module.exports = router;


