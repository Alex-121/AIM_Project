

const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '1234',
    user:'root',
    database: 'aim',
    host: 'localhost',
    port: '3306',
    multipleStatements:true
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
ideadb.getAnIdea = (req,res) => {
    return new Promise((resolve, reject) => {
        pool.query(`Select * from collab_ideas WHERE idea_id = ?`,[req.params.idea_id], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};


ideadb.post = (req,res) =>{
    console.log(req.body.Title)
    return new Promise((resolve, reject)=> {
        let idea = req.body;
        let query = "SET @idea_id = ?; SET @date = ?;SET @title = ?; SET @topic =?; SET @descript = ?;SET @rating = ?; CALL CreateOrEdit(@idea_id, @date,@title,@topic,@descript,@rating);";

        pool.query(query,[0, new Date().toLocaleDateString(), idea.Title, 1, idea.Description, 0], (err, results) => {
            if(err)
                return reject(err);
            return resolve(results);
        })

    })

}


module.exports = ideadb;