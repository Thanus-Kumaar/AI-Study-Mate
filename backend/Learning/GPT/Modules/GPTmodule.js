const {GoogleGenerativeAI} = require('@google/generative-ai');
const URL = require('url')

const GPT = new GoogleGenerativeAI(process.env.API_KEY);

const model = GPT.getGenerativeModel({model : "gemini-pro"});

GPTservices = {
  LearnTopic : async (topic)=>{
    try{
      const prompt = `Explain about this ${topic} in detail. Explain the subtopics or concepts within this in detail. Also give what topics to read after this.Give response in markdown language.`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return {code:200, content:response.text()};
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
  PreRequisite : async (topic)=>{
    try{
      const prompt = `Give me top resources/tutorials (avoid courses) and wikipedia page to learn and deeply understand ${topic}.Give response in markdown language and only the links`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const links = (response.text().split('\n'));
      console.log(links)
      for( i of links){
        if(i.includes("https://")){
          const link = i.split('(')[1]
          if(link.startsWith("http")){
            console.log(link.slice(0,link.length-1));
          }
        }
      }
      return {code:200, content:response.text()};
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
}

module.exports = GPTservices