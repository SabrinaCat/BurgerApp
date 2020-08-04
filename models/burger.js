const orm = require("../config/orm.js");
//pass on those orm methods
const burgers ={
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
    updateBurger: function (objColVals, condition, cb) {
        orm.updateBurger("burger_eats", objColVals, condition, function (res){
            cb(res);
        });
    }
}
//export our new object named burgers
module.exports = burgers;