const db = require('../../Common/Database/SQLconnector');

const userServices = {
  SignUp : async (name, email, password, work)=>{
    const Q = "insert into User (Name, Email, Password, Profession) values (?,?,?,?);"
    db.query(Q,[name,email,password,work],(err,result)=>{
      if(err) console.log(err);
      else{
        console.log(result);
        return {code:201};
      }
    });
  },
  Login : async (email, password)=>{
    const Q = "select User_ID from User where email = ? and password = ?;"
    db.query(Q,[email,password],(err,result)=>{
      if(err) console.log(err);
      else{
        console.log(result);
        if(result.length==0) return {code:100, user_ID:"None"};
        else return {code:100, user_ID:res[0].User_ID};
      }
    });
  },
  UpdateDetails : async (id, name, work)=>{
    const Q = "update User set name = ? and profession = ? where User_ID = ?;"
    db.query(Q,[name, work, id],(err, result)=>{
      if(err) console.log(err);
      else{
        console.log(result);
        if(result.affectedRows==1) return {code:200};
      }
    });
  },
}

module.exports = userServices;