const { constants } = require('fs/promises');
const db = require('../../../Database/SQLconnector.js');
const GPT = require('../../GPT/Modules/GPTmodule.js');

const StudyServices = {
  SaveTopic : async (topic, date, userID)=>{
    try{
      const ans = await GPT.LearnTopic(topic);
      console.log(ans);
      const result = db.query("insert into Topic (Name, Date, Content, User_ID) values(?,?,?,?);",[topic, date, ans.content, userID]);
      if(result.affectedRows == 1 && ans.code == 200){
        return {code:200,content: ans.content};
      }
      return {code:100}
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
  addLinks : async(l1,l2,wiki,topic,date)=>{
    try{
      const result = db.query("update Topic set topic_link1 = ? and topic_link2 = ? and Topic_wiki = ? where name = ? and Date = ?;",[l1, l2, wiki, topic, date]);
      if(result.affectedRows == 1){
        return {code:200}
      }
      else return {code:100};
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
  addLesson : async (lesson, wiki, ref_book, topics)=>{
    try{
      const result = db.query("insert into lesson (Name, Reference_Book, Lesson_wiki) values(?,?,?);",[lesson, ref_book, wiki]);
      const lesson_ID = db.query("select lesson_ID from lesson where name = ?",lesson);
      let result1;
      for(i of topics){
        result1 = db.query("update topic set lesson_ID = ? where name = ? and date = ?",[lesson_ID, i.name, i.date]);
      }
      if(result.affectedRows == 1 && result1.affectedRows >0){
        return {code:200}
      }
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
  getTopics : async (date)=>{
    try{
      const result = db.query("select * from Topic where date = ?",[date]);
      if(result.length>0){
        console.log(result);
        return {code:200,topics:result};
      }
      else return {code:100};
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
}

module.exports = StudyServices;