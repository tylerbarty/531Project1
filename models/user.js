var db = require('../db');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

getAllDonut = () => new Promise((resolve, reject) => {
    db.query('SELECT * from Donut', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results);
        }
    });
});

// The code below export the above functios so it can be used in other files.
module.exports = {
    getAllDonut
};
