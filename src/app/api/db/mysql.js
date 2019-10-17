const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '1234',
    user:'root',
    database: 'aim',
    host: 'localhost',
    port: '3306'
});

let ideadb ={};

ideadb.get = () => {
    return new Promise((resolve, reject) => {
        pool.query(`Select * from collab_ideas`, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};



module.exports = ideadb;