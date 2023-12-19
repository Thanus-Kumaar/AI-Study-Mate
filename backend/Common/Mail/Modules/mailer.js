const mail = require('nodemailer');
const welcome_template = require('../Templates/welcome.js');
const signin_otp = require('../Templates/sign_in_OTP.js');

const transporter = mail.createTransport({
  service : 'Gmail',
  auth : {
    user : 'thanuskumaara@gmail.com',
    pass : 'THANUSgmail@2005'
  }
});

const mailFunctions = {
  OTPmail : async (user_email,type)=>{
    let mailOptions;
    if(type == "SignIn"){
      mailOptions = {
        from : 'thanuskumaara@gmail.com',
        to : user_email,
        subject : 'OTP for account sign up - AI Study Mate',
        html : signin_otp(user_email,)
      }
    }
    else if(type == "ForgotPassword"){
      mailOptions = {
        from : 'thanuskumaara@gmail.com',
        to : user_email,
        subject : 'OTP for password recovery - AI Study Mate',
        html : user_email
      }
    }
    transporter.sendMail(mailOptions,(err,info)=>{
      if(err){
        console.log(err);
        return {code:404}
      }
      else return {code:200}
    });
  },
  PassResetSuccess : async (user_email)=>{
    const mailOptions={
      from : 'thanuskumaara@gmail.com',
        to : user_email,
        subject : 'Password reset successful - AI Study Mate',
        html : user_email
    }
    transporter.sendMail(mailOptions,(err,info)=>{
      if(err){
        console.log(err);
        return {code:404}
      }
      else return {code:200}
    });
  },
  ProfileUpdated : async (user_email)=>{
    const mailOptions={
      from : 'thanuskumaara@gmail.com',
        to : user_email,
        subject : 'Your profile modified - AI Study Mate',
        html : user_email
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
    transporter.sendMail(mailOptions,(err,info)=>{
      if(err){
        console.log(err);
        return {code:404}
      }
      else return {code:200}
    });
  }
}