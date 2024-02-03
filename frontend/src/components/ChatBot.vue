<template>
  <div class="chat-div">
    <div class="chat-container" ref="chat">
      <div
        v-for="(chat, index) in current_chat"
        :key="index"
        :class="{
          'chat-body-even': index % 2 === 0,
          'chat-body-odd': index % 2 !== 0,
        }"
        v-html="chat"
      ></div>
      <div v-if="this.loading" class="chat-body-odd">
        <ChatLoading />
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="chat">
      <input
        type="text"
        placeholder="Enter a prompt"
        class="chat-input"
        v-model="prompt_msg"
        @keyup.enter="handle_chat"
      />
      <button class="send" @click="handle_chat">Send</button>
    </div>
    <div class="scroll-down" @click="ScrollDown">|</div>
  </div>
</template>

<script>
import axios from "axios";
import MarkdownIt from "markdown-it";
import ChatLoading from "./Utilities/chatLoading.vue";
import MainMenu from "./Utilities/MainMenu.vue";

export default {
  data() {
    return {
      prompt_msg: "",
      loading: false,
      current_chat: [],
    };
  },
  components: {
    ChatLoading,
  },
  methods: {
    send_prompt() {
      if (this.prompt_msg !== "" && this.prompt_msg !== undefined) {
        const para = { prompt: this.prompt_msg };
        this.loading = true;
        axios
          .get("http://localhost:8000/GPT/Chat", { params: para })
          .then((Response) => {
            this.loading = false;
            const markdownText = Response.data;
            const md = new MarkdownIt();
            const renderedMarkdown = md.render(markdownText);
            this.current_chat.push(renderedMarkdown);
          })
          .catch((err) => {
            this.loading = false;
            this.current_chat.pop();
            console.error(err);
            this.current_chat.push("Error in sending prompt");
            this.loading = false;
            alert(err);
          });
      }
    },
    push_to_chat() {
      if (this.prompt_msg !== "" && this.prompt_msg !== undefined) {
        this.current_chat.push(this.prompt_msg);
      }
    },
    handle_chat() {
      this.push_to_chat();
      this.send_prompt();
      this.prompt_msg = "";
    },
    ScrollDown() {
      const chatdiv = this.$refs.chat;
      chatdiv.scrollTop = chatdiv.scrollHeight;
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mooli&family=Poppins:wght@300&display=swap");

*{
  font-family: 'Poppins', sans-serif;;
}
.chat-div {
  position: relative;
  width: 450px;
  text-align: center;
  padding: 2px;
  border: 1px solid;
  background-color: #101818;
  display: flex;
  flex-direction: column;
  font-size: small;
}
.chat-div::-webkit-scrollbar {
  width: 0px;
}
.chat-container {
  flex: 1;
  height: 90%;
  overflow-y: scroll;
}

.chat-container::-webkit-scrollbar {
  width: 0px;
}
.chat-body-even {
  height: auto;
  width: auto;
  max-width: 70%;
  margin: 5px;
  border-radius: 10px;
  background-color: #9cb2de;
  text-align: left;
  padding: 5px 10px 5px 10px;
  float: right;
  clear: both;
}
.chat-body-odd {
  height: auto;
  width: auto;
  max-width: 70%;
  margin: 5px;
  border-radius: 10px;
  background-color: #d1d3d7;
  text-align: left;
  padding: 5px 10px 5px 10px;
  float: left;
  clear: both;
}

.chat-body::-webkit-scrollbar {
  width: 0px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.chat-input {
  vertical-align: bottom;
  margin: 0px 5px 5px 5px;
  width: 97%;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 13px;
}
.cancel {
  position: relative;
  left: 50%;
  top: -10px;
  height: 0px;
  cursor: pointer;
}
.chat {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
}
.send {
  height: 30px;
  margin: 3px;
}
.scroll-down{
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgba(111, 111, 111, 0.6);
  position: absolute;
  bottom: 55px;
  left: 50%;
  z-index: 5;
  cursor: pointer;
}
</style>
