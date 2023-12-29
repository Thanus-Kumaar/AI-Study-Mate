<template>
  <div style="background-color: beige; width: 1100px;">
    <div v-html="renderedMarkdown"></div>
  </div>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import axios from 'axios';

  export default{
    data() {
      return {
        markdownText: '# Hello, this is a Markdown text!',
        renderedMarkdown: '',
      }
    },
    props: {
      topic: {
        type: String,
        required: true,
      },
    },
    watch: {
      topic(newVal, oldVal){
        console.log(oldVal);
        this.getTopic(newVal);
      }
    },
    methods: {
      getTopic(topic){
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
  }
</script>