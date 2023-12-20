const mail_services = require('../Modules/mailer.js');
const otp_generate = require('../../Auth/otp/OTPgenerator.js');

const mail_controller = {
  OTPmail : async (req,res,type)=>{
    const {email, name} = req.body;
    const otp = await otp_generate(email);
    const mail = await mail_services.OTPmail(email, type, name, otp);
    if(mail.code == 200) res.status(200).json({message:"Mail sent successfully"});
    else res.status(404).json({error:"Email not found !"});
  },
  PassResetSuccess : async (req,res)=>{
    const {email, name} = req.body;
    const mail = await mail_services.PassResetSuccess(email, name);
    if(mail.code == 200) res.status(200).json({message:"Mail sent successfully"});
    else res.status(404).json({error:"Email not found !"});
  },
  ProfileUpdated : async (req,res)=>{
    const {email, name, work} = req.body;
    const mail = await mail_services.ProfileUpdated(email, name, work);
    if(mail.code == 200) res.status(200).json({message:"Mail sent successfully"});
    else res.status(404).json({error:"Email not found !"});
  },
  Welcome : async (req,res)=>{
    const {email, name, pass} = req.body;
    const mail = await mail_services.Welcome(email, name, pass);
    if(mail.code == 200) res.status(200).json({message:"Mail sent successfully"});
    else res.status(404).json({error:"Email not found !"});
  }
};

module.exports = mail_controller;