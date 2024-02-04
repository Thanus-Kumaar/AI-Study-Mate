<template>
  <div
    style="
      height: 100vh;
      background-color: #282e2e;
      display: flex;
      flex-direction: column;
    "
  >
    <div class="content-div">
      <div style="display: flex; flex-direction: column">
        <topic @topic-sent="gotTopic" />
        <pomo-timer />
      </div>
      <display :topic="topic_to_send" />
      <chat-bot />
    </div>
  </div>
</template>

<script>
import MainMenu from "../Utilities/MainMenu.vue";
export default {
  data() {
    return {
      topic: "",
      topic_to_send: "",
    };
  },
  components: {
    MainMenu,
  },
  methods: {
    gotTopic(t) {
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
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
}
</style>
