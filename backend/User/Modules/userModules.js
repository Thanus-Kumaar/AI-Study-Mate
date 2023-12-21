const db = require('../../Database/SQLconnector.js');

const userServices = {
  SignUp: async (name, email, password, work) => {
    try {
      db.query("lock table User write;");
      const Q = "insert into User (Name, Email, Password, Profession) values (?,?,?,?);";
      const result = db.query(Q, [name, email, password, work]);
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
      db.query("lock table User read;");
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
      db.query("lock table User write;");
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
}

module.exports = userServices;