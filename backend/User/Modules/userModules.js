const db = require('../../Common/Database/SQLconnector');

const userServices = {
  SignUp : async (name, email, password, work)=>{
    db.query("lock table User write;");
    const Q = "insert into User (Name, Email, Password, Profession) values (?,?,?,?);"
    db.query(Q,[name,email,password,work],(err,result)=>{
      if(err){
        console.log(err);
        db.query("unlock tables;");
        return {code:500};
      }
      else{
        console.log(result);
        db.query("unlock tables;");
        return {code:201};
      }
    });
  },
  Login : async (email, password)=>{
    db.query("lock table User read;");
    const Q = "select User_ID from User where email = ? and password = ?;"
    db.query(Q,[email,password],(err,result)=>{
      if(err){
        console.log(err);
        db.query("unlock tables;");
      }
      else{
        console.log(result);
        db.query("unlock tables;")
        if(result.length==0) return {code:100, user_ID:"None"};
        else return {code:100, user_ID:res[0].User_ID};
      }
    });
  },
  UpdateDetails : async (id, name, work)=>{
    db.query("lock table User write;");
    const Q = "update User set name = ? and profession = ? where User_ID = ?;"
    db.query(Q,[name, work, id],(err, result)=>{
      if(err){
        console.log(err);
        db.query("unlock tables;");
        return {code:500};
      }
      else{
        console.log(result);
        if(result.affectedRows==1){
          db.query("unlock tables;");
          return {code:200};
        }
      }
    });
  },
}

module.exports = userServices;