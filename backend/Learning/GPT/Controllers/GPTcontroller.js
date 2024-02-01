const GPTservices = require('../Modules/GPTmodule.js');

const GPTcontroller = {
  LearnTopic : async (req,res)=>{
    const {topic} = req.query;
    console.log(req)
    const ans = await GPTservices.LearnTopic(topic);
    const resources = await GPTservices.PreRequisite(topic);
    if(ans.code == 200 && resources.code == 200){
      res.status(200).json(ans.content+"\n\n"+resources.content);
    }
    else res.status(500).json({error:"An error occured !"});
  },
  ChatBot : async (req,res)=>{
    const {prompt} = req.query;
    const ans = await GPTservices.ChatBot(prompt);
    if(ans.code == 200){
      res.status(200).json(ans.content);
    }
    else res.status(500).json({error:"An error occured !"});
  },
  Ref_Book : async (req,res)=>{
    const {lesson} = req.query;
    const ans = await GPTservices.Ref_Book(lesson);
    if(ans.code == 200){
      res.status(200).json(ans.content);
    }
    else res.status(500).json({error:"An error occured !"});
  },
};

module.exports = GPTcontroller;