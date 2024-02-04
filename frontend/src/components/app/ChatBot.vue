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
      <button class="send" @click="handle_chat">
        <i class="fa-solid fa-paper-plane" style="color: #ffffff"></i>
      </button>
    </div>
    <div class="scroll-down" @click="ScrollDown">
      <div style="margin-top: 3px">
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MarkdownIt from "markdown-it";
import ChatLoading from "../Utilities/chatLoading.vue";
import MainMenu from "../Utilities/MainMenu.vue";

import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
            if (renderedMarkdown !== "" && renderedMarkdown !== undefined) {
              this.current_chat.push(renderedMarkdown);
            } else {
              this.current_chat.push("Server responded with no answer");
            }
          })
          .catch((err) => {
            this.loading = false;
            console.error(err);
            this.current_chat.push("Error in sending prompt");
            this.loading = false;
            alert(err);
          });
      }
    },
    push_to_chat() {
      if (
        this.prompt_msg !== "" &&
        this.prompt_msg !== undefined &&
        this.current_chat.length < 40
      ) {
        this.current_chat.push(this.prompt_msg);
      }
      if (
        this.prompt_msg !== "" &&
        this.prompt_msg !== undefined &&
        this.current_chat.length == 40
      ) {
        this.current_chat.shift();
        this.current_chat.shift();
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
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mooli&family=Poppins:wght@300&display=swap");

* {
  font-family: "Poppins", sans-serif;
}
.chat-div {
  position: relative;
  width: 450px;
  text-align: center;
  padding: 2px;
  background-color: #282e2e;
  display: flex;
  flex-direction: column;
  font-size: small;
  margin: 25px 0 0 0;
}
.chat-div::-webkit-scrollbar {
  width: 0px;
}
.chat-container {
  flex: 1;
  height: 80%;
  overflow-y: scroll;
  padding: 10px 2px 5px 2px;
}

.chat-container::-webkit-scrollbar {
  width: 0px;
}
.chat-body-even {
  height: auto;
  width: auto;
  max-width: 70%;
  margin: 5px;
  border-radius: 10px 10px 0px 10px;
  background-color: #3e64b6;
  color: white;
  text-align: left;
  padding: 5px 10px 5px 10px;
  float: right;
  clear: both;
}
.chat-body-odd {
  height: auto;
  width: auto;
  max-width: 75%;
  margin: 5px;
  border-radius: 10px 10px 10px 0px;
  background-color: #989898;
  color: rgb(0, 0, 0);
  text-align: left;
  padding: 5px 10px 5px 10px;
  float: left;
  clear: both;
  overflow: auto;
}
.chat-body-odd::-webkit-scrollbar {
  width: 0px;
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
  position: relative;
  vertical-align: bottom;
  margin: 0px 5px 5px 5px;
  flex: 1;
  height: 30px;
  border: #3e64b6 2px solid;
  border-radius: 20px;
  background: none;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 13px;
  outline: none;
  color: white;
}
.chat {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 20px 10px 0px;
  text-align: center;
  align-items: center;
}
.send {
  height: 40px;
  width: 40px;
  margin: 3px;
  border-radius: 50%;
  border: none;
  background-color: #3e64b6;
}
.send i {
  margin-right: 2px;
}
.scroll-down {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: rgba(115, 115, 115, 0.5);
  position: absolute;
  bottom: 65px;
  left: 45%;
  z-index: 5;
  cursor: pointer;
}
</style>
