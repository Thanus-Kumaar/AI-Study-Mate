<template>
  <div style="text-align: center; margin: 15px;">
    Input Topic : 
    <input v-model="topic" type="text">
    <button @click="getTopic()">Learn</button>
  </div>
  <div v-html="renderedMarkdown" style="background-color: rgb(39, 39, 39); color: white; padding: 50px;"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import axios from 'axios';

export default {
  data() {
    return {
      markdownText: '# Hello, this is a Markdown text!',
      renderedMarkdown: '',
      topic: "",
      prompt: "",
    };
  },
  methods:{
    getTopic(){
      const para = {topic:this.topic};
      axios.get('http://localhost:8000/GPT/LearnTopic',{params:para})
      .then(Response =>{
        console.log(Response.data);
        this.markdownText = Response.data;
        const md = new MarkdownIt();
        this.renderedMarkdown = md.render(this.markdownText);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
};
</script>


<style scoped>

</style>
