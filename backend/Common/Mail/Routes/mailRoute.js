const express = require('express');
const mail_controller = require('../Controllers/mailController.js')
const router = express.Router();

//sends mail for sign in otp
router.post('/SignInOTP',(req,res)=>{
  mail_controller.OTPmail(req,res,"SignIn");
});

//sends mail for password reset otp
router.post('/ResetOTP', (req,res)=>{
  mail_controller.OTPmail(req,res,"ForgotPassword");
});

//sends mail for successful signup
router.post('/welcome',(req,res)=>{
  mail_controller.Welcome(req,res);
});

//sends mail for successful password reset
router.post('/resetSuccess',(req,res)=>{
  mail_controller.PassResetSuccess(req,res);
});

//sends mail for updation of user profile
router.post('/profileUpdate',(req,res)=>{
  mail_controller.ProfileUpdated(req,res);
});

module.exports = router;