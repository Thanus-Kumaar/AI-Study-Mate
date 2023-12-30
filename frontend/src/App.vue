<template>
  <div style="display: flex; flex-direction: row; column-gap: 5px; justify-content: space-evenly;">
    <topic @topic-sent="this.gotTopic" />
    <display :topic="this.topic_to_send" style="margin: 5px; padding: 15px;" />
  </div>
  <div class="chatbot">ChatBot</div>
</template>

<script>
export default {
  data() {
    return {
      topic: "",
      topic_to_send: "",
      prompt: "",
    };
  },
  methods:{
    gotTopic(t){
      this.topic = t;
      this.topic_to_send = this.topic;
    }
  }
};
</script>

<style scoped>
  .chatbot{
    z-index: 10;
    margin: 10px;
    position: absolute;
    right: 30px;
    padding: 5px;
    background-color: lavender;
    cursor: pointer;
  }
  .popup{
    position: absolute;
    left: 25%;
    top: 20%;
    z-index: 1;
    width: 800px;
    height: 500px;
    background-color: aqua;
  }
</style>
