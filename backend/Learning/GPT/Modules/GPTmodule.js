const {GoogleGenerativeAI} = require('@google/generative-ai');
const {URL} = require('url');

const GPT = new GoogleGenerativeAI(process.env.API_KEY);

const model = GPT.getGenerativeModel({model : "gemini-pro"});

GPTservices = {
  LearnTopic : async (topic)=>{
    try{
      const prompt = `Give me only a question that i can ask you to explain about ${topic} in detail, providing explanation and examples related to it including the subtopics or concepts within the topic.`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const response2 = await GPTservices.ChatBot(response.text());
      return {code:200, content:response2.content};
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
  PreRequisite : async (topic)=>{
    try{
      const prompt = `Give me top free resources/tutorials (avoid courses) and wikipedia page to learn and deeply understand ${topic}.Give response in markdown language and only the links`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const links = (response.text().split('\n'));
      console.log(response.text());
      let resources = "";
      for( i of links){
        if(i.includes("https://") && i!=undefined){
          let link = i.split('(')[1];
          if(link!=undefined && link.startsWith("http")){
            let urlString = link.slice(0,link.length-1);
            let parsedUrl = new URL(urlString);
            let domain = parsedUrl.origin;
            if(!resources.includes(domain)){
              resources = resources+"["+domain+"]"+"("+domain+")\n\n";
            }
          }
        }
      }
      return {code:200, content:resources};
    }
    catch(err){
      console.log(err);
      return {code:500};
    }
  },
  ChatBot : async (prompt)=>{
    try{
      prompt = prompt;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return {code:200, content:response.text()};
    }
    catch(err){
      if(err){
        console.log(err);
        return {code:500};
      }
    }
  },
  Ref_Book : async (lesson)=>{
    try{
      prompt = `Give me one best reference book to completely understand ${lesson}. Give me answer in the form of a dictionary with two elements, {title:title, author:author_name}.`;
      prompt = prompt + ". Explain in not more than 500 words";
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const book = response.text().split('}')[0];
      console.log(response.text());
      return {code:200, content:book};
    }
    catch(err){
      if(err){
        console.log(err);
        return {code:500};
      }
    }
  }
}

module.exports = GPTservices