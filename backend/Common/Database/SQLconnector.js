const mysql = require('mysql2');
const fs = require('fs');

const pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'THANUSmysql@2005',
  database:'AISM'
});

pool.getConnection((err,con)=>{
  if(err) console.log(err);
  else{
    console.log('Connected to Database');
    const sqlInit = fs.readFileSync('./schema.sql','utf8');
    pool.query(sqlInit,(error, result)=>{
      if(error) console.log(error);
      else console.log("Created schema successfully !");
    });
  }
})

module.exports = pool;