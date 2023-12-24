const mysql = require('mysql2');
require('dotenv').config();
const fs = require('fs');

const pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:process.env.MYSQL_PASSWORD,
  database:process.env.MYSQL_DB
});

pool.getConnection((err,con)=>{
  if(err) console.log(err);
  else{
    console.log('Connected to Database');
    const sqlInit = fs.readFileSync(process.env.SQL_PATH,'utf8');
    const tables = sqlInit.split(';');
    try{
      for (const table of tables){
        if(table.trim() != ''){
            pool.query(table,(error, result)=>{
              if(error) console.log(error);
              else console.log("Created table successfully !");
          });
        }
      }
    }
    catch(err){
      console.log(err);
    }
  }
})

module.exports = pool;