<template>
  <div class="main-div">
    <div class="loading-div" v-if="this.loading">
      Waiting for response from server
      <div class="loading-spinner"></div>
    </div>
    <div v-html="renderedMarkdown" v-else></div>
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
        loading: false
      }
    },
    props: {
      topic: {
        type: String,
        required: true,
      },
    },
    watch: {
      topic: {
        handler(newVal, oldVal){
          this.getTopic(newVal);
        },
        deep: true,
      },
    },
    methods: {
      getTopic(topic){
        this.loading = true;
        const para = {topic: topic};
        axios.get('http://localhost:8000/GPT/LearnTopic',{params:para})
        .then(Response =>{
          this.loading = false;
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

<style>
  .loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 20px auto; /* Adjust margin as needed */
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loading-div{
    width: 1100px;
    text-align: center;
    font-size: 24px;
    padding: 10px;
    transform:translateY(100%) ;
  }

  .main-div{
    background-color: beige;
    width: 1100px;
    min-height: 600px;
  }
</style>