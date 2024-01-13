<template>
  <div class="pop-up">
    <div class="chat-body" v-html="this.renderedMarkdown">
    </div>
    <div class="chat">
      <input type="text" placeholder="Enter a prompt" class="chat-input" v-model="this.prompt_msg">
      <button class="send" @click="this.send_prompt">Send</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import MarkdownIt from 'markdown-it';
  export default{
    data(){
      return{
        prompt_msg: '',
        markdownText: '',
        renderedMarkdown : ''
      }
    },
    methods: {
      send_prompt(){
        if(this.prompt_msg!='' && this.prompt_msg!=undefined){
          const para = {prompt: this.prompt_msg};
          axios.get('http://localhost:8000/GPT/Chat',{params:para})
          .then(Response =>{
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
  }
</script>

<style scoped>
  .pop-up{
    width: 800px;
    text-align: center;
    padding: 2px;
    border: 1px solid;
    background-color: rgb(84, 91, 91);
  }
  .chat-body{
    height: 500px;
    background-color: rgb(152, 152, 255);
    margin: 5px;
    text-align: left;
    overflow: scroll;
    padding-left: 10px;
  }
  .chat-input{
    margin: 0px 5px 5px 5px;
    width: 97%;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 13px;
  }
  .cancel{
    position:relative;
    left: 50%;
    top: -10px;
    height: 0px;
    cursor: pointer;
  }
  .chat{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .send{
    height: 30px;
    margin: 3px;
  }
</style>