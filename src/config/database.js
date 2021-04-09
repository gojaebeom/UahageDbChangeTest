const { createPool } = require("mysql");

const pool = createPool({
    port : process.env.MYSQL_PORT,
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.MYSQL_DB,
    connectionLimit : 10
});

exports.query = function(query, params){
    return new Promise((resolve, reject)=>{
        pool.query(query, params, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        });
    });
}

