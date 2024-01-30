<template>
  <div class="chat-div">
    <div class="chat-body" v-html="this.renderedMarkdown">
    </div>
    <div class="chat">
      <input type="text" placeholder="Enter a prompt" class="chat-input" v-model="this.prompt_msg" @keyup.enter="this.send_prompt">
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
  .chat-div{
    width: 450px;
    text-align: center;
    padding: 2px;
    border: 1px solid;
    background-color: #101818;
  }
  .chat-div::-webkit-scrollbar{
    width: 0px;
  }
  .chat-body{
    height: 91%;
    background-color: #D1D3D7;
    text-align: left;
    padding: 0px 10px 10px 10px;
    overflow: scroll;
  }
  .chat-body::-webkit-scrollbar{
    width: 0px;
  }
  .chat-input{
    vertical-align: bottom;
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
    margin-top: 5px;
  }
  .send{
    height: 30px;
    margin: 3px;
  }
</style>