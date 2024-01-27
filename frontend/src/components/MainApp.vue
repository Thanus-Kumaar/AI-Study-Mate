<template>
  <div style="height: 100vh; background-color: #101818; display: flex; flex-direction: column;">
    <div class="topbar">AI Study Mate</div>
    <div class="content-div">
      <div style="display: flex; flex-direction: column;">
        <topic @topic-sent="this.gotTopic" />
        <pomo-timer />
      </div>
      <display :topic="this.topic_to_send" />
      <chat-bot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: "",
      topic_to_send: "",

    };
  },
  methods:{
    gotTopic(t){
      this.topic = t;
      this.topic_to_send = this.topic;
    },
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
    border-bottom: 3px solid #101818;
  }

  .content-div{
    display: flex;
    flex-direction: row;
    column-gap: 3px;
    flex: 1;
    overflow: scroll;

  }

  .content-div::-webkit-scrollbar{
    width: 0px;
  }

</style>
