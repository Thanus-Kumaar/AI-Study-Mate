const db = require('../../Database/SQLconnector.js');
const bcrypt = require('bcrypt');

const saltRound = 10;

const userServices = {
  SignUp: async (name, email, password, work) => {
    try {
      //hashing the password
      const encrypted_password = await bcrypt.hash(password,saltRound);

      //inserting into User table
      db.query("lock tables User write;");
      const Q = "insert into User (Name, Email, Password, Profession) values (?,?,?,?);";
      const result = db.query(Q, [name, email, encrypted_password, work]);
      db.query("unlock tables;");
      console.log(result);
      return { code: 201 };
    } catch (err) {
      console.error(err);
      db.query("unlock tables;");
      return { code: 500 };
    }
  },
  
  Login : async (email, password)=>{
    try{
      //hashing the password
      const encrypted_password = await bcrypt.hash(password,saltRound);

      //checking if the given user and password available
      db.query("lock tables User read;");
      const Q = "select User_ID from User where email = ? and password = ?;"
      const result = db.query(Q,[email,password]);
      db.query("unlock tables;");
      console.log(result);
      if(result.length == 0) return {code:100, user_ID:"None"};
      else return {code:100, user_ID:result[0].User_ID};
    }
    catch(err){
      console.error(err);
      db.query("unlock tables;");
      return { code: 500 };
    }
  },
  UpdateDetails : async (id, name, work)=>{
    try{
      db.query("lock tables User write;");
      const Q = "update User set name = ? and profession = ? where User_ID = ?;"
      const result = db.query(Q,[name, work, id]);
      console.log(result);
      db.query("unlock tables;");
      if(result.affectedRows==1){
        return {code:200};
      }
    }
    catch(err){
      console.log(err);
      db.query("unlock tables;");
      return {code:500};
    }
  },
  UserPresent : async (email)=>{
    try{
      db.query("lock tables User read;");
      const Q = "select user_ID from User where email = ?;"
      const result = db.query(Q,[email]);
      console.log(result);
      db.query("unlock tables;");
      if(result.length>0){
        return {code:200};
      }
      else return {code:100};
    }
    catch(err){
      console.log(err);
      db.query("unlock tables;");
      return {code:500}
    }
  },
}

module.exports = userServices;