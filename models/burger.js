const orm = require("../config/orm.js");
//pass on those orm methods
const burger ={
    selectAllBurger: function (cb) {
        orm.selectAllBurger("burger_eats", function(res) {
            cb(res);
        });
    },
    createBurger: function (cols, vals, cb) {
        orm.createBurger("burger_eats",cols, vals, function (res){
            cb(res);
        });
    },
    //function UPDATE "burger_eats" SET (burger_name, devoured) WHERE *condition*
    updateBurger: function (devoured, condition, cb) {
        orm.updateBurger("burger_eats", devoured, condition, function (res){
            cb(res);
        });
    },
    deleteBurger: function(condition, cb) {
        orm.deleteBurger("burgers", condition, function(res) {
          cb(res);
        });
      }
    };

//export our new object named burger
module.exports = burger;