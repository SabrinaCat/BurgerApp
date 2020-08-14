const connection = require("../config/connection.js");

//adds specified number of questions marks 
function addQMarks(num) {
  let arr = [];
  //for each index push to the array
  for (let i=0; i< num; i++){
    arr.push('?');
  }
  //stringify that array
  return arr.toString();
}
//function to convert oject key and value pairs to the mysql syntax
function objToSql(ob) {
  let array = [];
//loop through all keys in object and convert them to strings
//strings will then be pushed into array
  for (let key in ob){
    //value will equal the object's key
    let value = ob[key];
    //validation to check hidden properties of object
    if (Object.hasOwnProperty.call(ob,key)){
      //if the value is a string and spaces exist within that string then add quotations around the value
      if (typeof value ==="string" && value.indexOf(" ")>= 0){
      //then value will equal obj[key] value but with quotations
      value = "'" + value + "'";
      }
      //finally push our new stringified values to our array
      arr.push(key + '=' + value);
    }
  }
}
//create object for turning our functions into queries and handling the error or response of that query
const orm = {
  //render all burgers to pass to handelbars later
  selectAllBurger : function (tableName, cb) {
    let dbQuery = "SELECT * FROM " + tableName + ";";
    connection.query (dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    })
  },
  //add a new burger
  createBurger : function (tableName, columns, values, cb) {
    //essentially creates this query: Insert into Burger_eats (id, burger_name, devoured) values (portabello, false)
    let dbQuery = "INSERT INTO " + tableName + 
    " (" + columns.toString() + ") "+ 
    "VALUES (" + addQMarks(values.length) + ") ";
    //log our query
    console.log(dbQuery);
    connection.query(dbQuery, values, function (err, res) {
      if (err) { 
        throw err;
      }
      cb(res);
    });
  },

  updateBurger: function (tableName, objColVals, condition, cb) {
    let dbQuery = "UPDATE "+ tableName + " SET " + objToSql(objColVals) +
    " WHERE " + condition;
    console.log(dbQuery);

    connection.query(dbQuery, function(err,res) {
      if (err){
        throw err;
      }
      cb(res)
    })
  }
}
  
  
  module.exports = orm;