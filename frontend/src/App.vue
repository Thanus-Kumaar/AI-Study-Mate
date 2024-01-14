<template>
  <div class="topbar">AI Study Mate</div>
  <div style="display: flex; flex-direction: row; column-gap: 3px; background-color: #101818;">
    <topic @topic-sent="this.gotTopic" />
    <display :topic="this.topic_to_send" style="margin-top: 5px; padding: 15px;" />
  </div>
  <div class="chatbot" @click="this.toggleChat">ChatBot</div>
  <chat-bot class="chat-pos" v-if="chat" />
</template>

<script>
export default {
  data() {
    return {
      topic: "",
      topic_to_send: "",
      prompt: "",
      chat: false,
    };
  },
  methods:{
    gotTopic(t){
      this.topic = t;
      this.topic_to_send = this.topic;
    },
    toggleChat(){
      this.chat = (!this.chat);
    }
  },
  mounted(){

  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Mooli&family=Poppins:wght@300&display=swap');
  .topbar{
    height: 5vh;
    background-color: #3E64B6;
    font-family: poppins;
    text-align: center;
    justify-content: center;
    color: #FFFF;
    font-size: 20px;
  }

  .chatbot{
    z-index: 10;
    margin: 10px;
    position: absolute;
    right: 30px;
    padding: 5px;
    background-color: lavender;
    cursor: pointer;
  }
  .chat-pos{
    position: fixed;
    left: 25%;
    top: 10%;
    z-index: 1;
    background-color: aqua;
  }
</style>
