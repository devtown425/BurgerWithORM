// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: (table, cb) => {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: (table, colNewVal, condition, cb) => {
        let queryString = `UPDATE ${table} SET ${colNewVal} WHERE ${condition};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;
