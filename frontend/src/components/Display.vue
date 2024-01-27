<template>
  <div class="main-div">
    <div class="loading-div" v-if="this.loading">
      Waiting for response from server
      <div class="loading-spinner"></div>
    </div>
    <div v-html="renderedMarkdown" v-else></div>
    <div style="display: flex; justify-content: right;" v-if="this.markdownText!=''">
      <div class="save">Save</div>
    </div>
  </div>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import axios from 'axios';

  export default{
    data() {
      return {
        markdownText: '',
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
          if(newVal!="" && newVal!=undefined) this.getTopic(newVal);
        },
        deep: true,
        immediate: true,
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
          alert(err);
        })
      }
    }
  }
</script>

<style scoped>
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
    text-align: center;
    font-size: 24px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .main-div{
    background-color: #F2F4F8;
    width: 1100px;
    max-height: 100%;
    overflow: scroll;
    padding: 10px;
    flex: 1;
    position: relative;
  }

  .main-div::-webkit-scrollbar{
    width: 0px;
  }

  .save{
    text-align: center;
    width: 100px;
    font-family: poppins;
    font-size: 13px;
    background-color: #3498db;
    padding: 5px;
    color: #F2F4F8;
    border-radius: 7px;
    z-index: 10;
  }
</style>