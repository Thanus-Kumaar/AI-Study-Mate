const StudyServices = require('../Modules/historyModule.js');

const studyController = {
  SaveTopic : async (req,res)=>{
    const {topic, date, content, user_ID} = req.body;
    if (user_ID == null || user_ID == undefined) return res.status(100).json(msg="No user found");
    const ans = await StudyServices.SaveTopic(topic, date, content, user_ID);
    console.log(ans)
    if(ans.code == 200){
      res.status(200).json(msg="Successful addition");
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