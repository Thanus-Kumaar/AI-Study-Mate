<template>
  <div
    style="
      height: 100vh;
      background-color: #101818;
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
.topbar {
  height: 5vh;
  background-color: #3e64b6;
  font-family: poppins;
  text-align: center;
  color: #ffff;
  font-size: 20px;
  border-bottom: 3px solid #101818;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title {
  flex: 1;
}

.menu-container {
  margin-right: 10px;
}

.content-div {
  display: flex;
  flex-direction: row;
  column-gap: 3px;
  flex: 1;
  overflow: scroll;
}

.content-div::-webkit-scrollbar {
  width: 0px;
}
</style>
