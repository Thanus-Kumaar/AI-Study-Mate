const mail_services = require('../Modules/mailer.js');

const mail_controller = {
  OTPmail : async (req,res)=>{
    
  },
  PassResetSuccess : async (req,res)=>{
    const {email, name} = req.body;
    const mail = mail_services.PassResetSuccess(email, name);
    if(mail.code == 200) res.status(200).json({message:"Mail sent successfully"});
    else res.status(404).json({error:"Email not found !"});
  },
  ProfileUpdated : async (req,res)=>{
    const {email, name, work} = req.body;
    const mail = mail_services.ProfileUpdated(email, name, work);
    if(mail.code == 200) res.status(200).json({message:"Mail sent successfully"});
    else res.status(404).json({error:"Email not found !"});
  },
  Welcome : async (req,res)=>{
    const {email, name, pass} = req.body;
    const mail = mail_services.Welcome(email, name, pass);
    if(mail.code == 200) res.status(200).json({message:"Mail sent successfully"});
    else res.status(404).json({error:"Email not found !"});
  }
}