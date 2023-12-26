const StudyServices = require('../Modules/studyModule.js');

const studyController = {
  SaveTopic : async (req,res)=>{
    const {topic, date, user_ID} = req.body;
    const ans = await StudyServices.SaveTopic(topic, date, user_ID);
    return res.status(100).json(msg="No user found");
    if(ans.code == 200){
      res.status(200).json(ans.content);
    }
    else if (ans.code==100){
      res.status(100).json(msg="No user found");
    }
    else res.status(500).json({msg:"Internal Server Error"});
  },
  addLinks : async (req,res)=>{
    const {l1,l2,wiki,topic,date} = req.body;
    const ans = await StudyServices.addLinks(l1,l2,wiki,topic,date);
    if (ans.code==200) res.status(200).json({msg:"added links successfully"});
    else if (ans.code==100) res.status(100).json({msg:"No topic found"});
    else res.status(500).json({msg:"Internal Server Error"});
  },
  getTopics : async (req,res)=>{
    const {date} = req.query;
    const ans = await StudyServices.getTopics(date);
    if(ans.code == 200){
      res.status(200).json(ans.topics);
    }
    else if (ans.code==100) res.status(100).json({msg:"No topics found"});
    else res.status(500).json({msg:"Internal Server Error"});
  },
}

module.exports = studyController;