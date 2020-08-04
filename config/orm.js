const connection = require("../config/connection.js");

//adds a ? to all values within a query
function addQMarks(num) {
  let arr = [];
  for (let i=0; i< num; i++){
    arr.push('?');
  }
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
  
  
  module.exports = orm;