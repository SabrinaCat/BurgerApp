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

const orm = {
  selectAll : (tableName, cb) => {
    const dbQuery = "SELECT * FROM" + tablename + ";";
    connection.query (dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    })
  }
}
  
  
  module.exports = orm;