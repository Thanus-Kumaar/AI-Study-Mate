/* Description:

- OTPvalidator is a function that validates a otp based on OTP table and returns
valid or not to the method calling it.

- if otp is found in the table(the passed otp is matching), it is removed from table.
*/

const db = require('../../../Database/SQLconnector.js');
const crypto = require('crypto');

async function validate_OTP(email,otp){
  //hashing the otp
  const hash = crypto.createHash('sha256');
  hash.update(otp);
  encrypted_otp = hash.digest('hex');

  //checking if otp present in table
  db.query("lock table OTP write;");
  db.query("select * from OTP where email = ? and otp = ?",[email,encrypted_otp],(err, result)=>{
    if(err) console.log(err)
    else{
      //if otp is found, delete the otp from table and return valid.
      if(result.length>0){
        db.query("delete from OTP where email = ? and otp = ?",[email,encrypted_otp]);
        db.query("unlock tables;");
        return {state:"valid"};
      }
      else{
        db.query("unlock tables;");
        return {state:"invalid"};
      }
    }
  })
}

module.exports = validate_OTP;