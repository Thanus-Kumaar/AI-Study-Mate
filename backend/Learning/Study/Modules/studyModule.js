const { constants } = require('fs/promises');
const db = require('../../../Database/SQLconnector.js');
const GPT = require('../../GPT/Modules/GPTmodule.js');
const { resolve } = require('path');
const { rejects } = require('assert');

const StudyServices = {
  SaveTopic : async (topic, date, content, userID)=>{
    return new Promise((resolve,rejects)=>{
      try{
        db.query("insert into Topic (Name, Date, Content, User_ID) values(?,?,?,?);",[topic, date, content, userID],(err,result)=>{
          console.log("result")
          if(err){
            console.log(err)
            rejects({ code: 500, msg: "Internal Server Error" });
            return;
          }
          if(result.affectedRows==1){
            resolve({code:200});
          }
          else resolve({code:100});
        });
      }
      catch(err){
        console.log(err);
        return {code:500};
      }
    })
  },
  addLinks : async(l1,l2,wiki,topic,date)=>{
    try{
      db.query("update Topic set topic_link1 = ? and topic_link2 = ? and Topic_wiki = ? where name = ? and Date = ?;",[l1, l2, wiki, topic, date],(result,err)=>{
        if(result.affectedRows == 1){
          return {code:200}
        }
        else return {code:100};
      });
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
    return new Promise((resolve,rejects)=>{
      try{
        console.log(date)
        const result = db.query("select * from Topic where date=?;",[date],(err)=>{
          console.log(err)
          rejects({code:500});
          return;
        });
        if(result.length>0){
          console.log(result);
          resolve({code:200})
        }
        else resolve({code:100});
      }
      catch(err){
        console.log(err);
        rejects({code:500});
      }
    })
  },
}

module.exports = StudyServices;