<template>
  <div style="padding: 10px; background-color: #282e2e;">
    <div class="content-div">
      <left-frame @topic-sent="gotTopic" />
      <display :topic="topic_to_send" />
      <right-frame />
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
  methods: {
    gotTopic(t) {
      console.log("Got topic-main", t);
      this.topic = t;
      this.topic_to_send = this.topic;
    },
  },
  mounted() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mooli&family=Poppins:wght@300&display=swap");

.content-div {
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #282e2e;
}
</style>
