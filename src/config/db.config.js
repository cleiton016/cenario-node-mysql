const mysql = require("mysql");
const config = require("@config");

let port = config.app.port_mysql;
let host = config.app.host;
let user = config.app.user;
let password = config.app.password;
let database = config.app.database;

const dbConn = mysql.createPool({
    "connectionLimit": 1000,
    host,
    user,
    port,
    password,
    database,
});

dbConn.execute = (query, params = []) => {
    return new Promise((resolve, reject) => {
        dbConn.query(query,params, (err, res) => {
            if (err){
                resolve(err)
            }else{
                resolve({'err': 0, res})
            }
        });
    });
};

module.exports = dbConn;

// var pool = mysql.createPool({
//     "connectionLimit" : 1000,
//     host,
//     user,
//     port,
//     password,
//     database
// });

// exports.execute = (query, params=[]) => {
//     return new Promise((resolve, reject) => {
//         pool.query(query, params, (error, result, fields) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result)
//             }
//         });
//     })
// }

// exports.pool = pool;
