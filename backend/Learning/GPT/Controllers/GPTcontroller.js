const GPTservices = require('../Modules/GPTmodule.js');

const GPTcontroller = {
  LearnTopic : async (req,res)=>{
    const {topic} = req.query;
    const ans = await GPTservices.LearnTopic(topic);
    const preq = await GPTservices.PreRequisite(topic);
    if(ans.code == 200 && preq.code == 200){
      res.status(200).json(ans.content+"##############################"+preq.content);
    }
    else res.status(500).json({error:"An error occured !"});
  },
};

module.exports = GPTcontroller;