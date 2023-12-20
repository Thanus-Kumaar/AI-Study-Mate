const mail = require('nodemailer');
const welcome_template = require('../Templates/welcome.js');
const signin_otp = require('../Templates/sign_in_OTP.js');
const reset_otp = require('../Templates/reset_pass_OTP.js');
const profile = require('../Templates/profile_update.js');
const reset_confirm = require('../Templates/reset_confirm.js');

const transporter = mail.createTransport({
  service : 'Gmail',
  auth : {
    user : 'thanuskumaara@gmail.com',
    pass : 'thanusGOOGLE-2005'
  }
});

const mailFunctions = {
  OTPmail : async (user_email, type, name, otp)=>{
    let mailOptions;
    if(type == "SignIn"){
      mailOptions = {
        from : 'thanuskumaara@gmail.com',
        to : user_email,
        subject : 'OTP for account sign up - AI Study Mate',
        html : signin_otp(user_email, name, otp)
      }
    }
    else if(type == "ForgotPassword"){
      mailOptions = {
        from : 'thanuskumaara@gmail.com',
        to : user_email,
        subject : 'OTP for password recovery - AI Study Mate',
        html : reset_otp(user_email, name, otp)
      }
    }
    try{
      transporter.sendMail(mailOptions);
      return {code:200}
    }
    catch(err){
      if(err){
        console.log(err);
        return {code:404}
      }
    }
  },
  PassResetSuccess : async (user_email, name)=>{
    const mailOptions={
      from : 'thanuskumaara@gmail.com',
        to : user_email,
        subject : 'Password reset successful - AI Study Mate',
        html : reset_confirm(user_email, name)
    }
    transporter.sendMail(mailOptions,(err,info)=>{
      if(err){
        console.log(err);
        return {code:404}
      }
      else return {code:200}
    });
  },
  ProfileUpdated : async (user_email, name, work)=>{
    const mailOptions={
      from : 'thanuskumaara@gmail.com',
        to : user_email,
        subject : 'Your profile modified - AI Study Mate',
        html : profile(user_email, name, work)
    }
    transporter.sendMail(mailOptions,(err,info)=>{
      if(err){
        console.log(err);
        return {code:404}
      }
      else return {code:200}
    });
  },
  Welcome : async (user_email, user_name, pass)=>{
    const mailOptions={
      from : 'thanuskumaara@gmail.com',
        to : user_email,
        subject : 'Welcome Aboard - AI Study Mate',
        html : welcome_template(user_email,user_name,pass)
    }
    try{
      transporter.sendMail(mailOptions);
      return {code:200}
    }
    catch(err){
      if(err){
        console.log(err);
        return {code:404}
      }
    }
  }
}

module.exports = mailFunctions;