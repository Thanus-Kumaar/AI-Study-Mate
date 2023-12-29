<template>
  <div style="display: flex; flex-direction: row; column-gap: 5px; justify-content: space-evenly;">
    <topic @topic-sent="this.gotTopic" />
    <display :topic="this.topic_to_send" style="margin: 5px; padding: 15px;" />
  </div>
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
      alert("TOPIC SENT")
    }
  }
};
</script>


<style scoped>
</style>
