const mysql = require('mysql');
const sql = require('./sql.js');

const pool = mysql.createPool({
    connectionLimit : process.env.MYSQL_LIMIT,
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USERNAME,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DB
})

const query = async (alias, values) => {
    return new Promise((resolve, reject) => pool.query(sql[alias], values, (error, results) => {
        if (error){
            console.log(error);
            reject({
                error
            });
        }else resolve(results);
    }));
}

// 쿼리 실행을 비동기로 처리 하기 위해 async로 함수를 만들고, 쿼리 실행 결과를 전달하기 위해 Promise를 사용함. 

module.exports = {
    query
}