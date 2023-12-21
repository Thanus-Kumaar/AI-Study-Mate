const {GoogleGenerativeAI} = require('@google/generative-ai');

const GPT = new GoogleGenerativeAI(process.env.API_KEY);

const model = GPT.getGenerativeModel({model : "gemini-pro"});

GPTservices = {
  LearnTopic : async (topic)=>{
    try{
      const prompt = `Explain about this ${topic} in detail.Give response in markdown language.`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      console.log(response.text())
      return {code:200, content:response.text()};
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
  PreRequisite : async (topic)=>{
    try{
      const prompt = `Give the top 3 essential concepts or topics needed to completely understand ${topic}.Give response in markdown language.`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      console.log(response.text())
      return {code:200, content:response.text()};
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
}

module.exports = GPTservices