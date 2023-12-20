/* Description:

- OTPgenerator is a function that generates a otp and returns it to the
method calling it.

- Along with this, it removes previous otps of the given email from OTP table
to avoid confusion of previous otps.

- It adds the new generated OTP to the table in hashed form.
*/

const db = require('../../../Database/SQLconnector.js');
const crypto = require('crypto');

async function generate_OTP(email){
  //generates OTP
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const hash = crypto.createHash('sha256');
  hash.update(otp);
  encrypted_otp = hash.digest('hex');
  
  // if the given email already has otps in table, removing it.
  db.query("lock table OTP write;");
  db.query("delete from OTP where email = ?;",[email],(err,result)=>{
    if(err) console.log(err);
  });

  // updating the otp table with hashed otp
  db.query("insert into OTP (email, otp) values(?,?);",[email, encrypted_otp],(err,result)=>{
    if(err) console.log(err);
  });
  db.query("unlock tables;");
  return otp;
};

module.exports = generate_OTP;