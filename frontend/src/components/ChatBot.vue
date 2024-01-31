<template>
  <div class="chat-div">
    <div class="chat-container">
      <div
        v-for="(chat, index) in current_chat"
        :key="index"
        :class="{
          'chat-body-even': index % 2 === 0,
          'chat-body-odd': index % 2 !== 0,
        }"
        v-html="chat"
      ></div>
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
  </div>
</template>

<script>
import axios from "axios";
import MarkdownIt from "markdown-it";

export default {
  data() {
    return {
      prompt_msg: "",
      current_chat: [],
    };
  },
  methods: {
    send_prompt() {
      if (this.prompt_msg !== "" && this.prompt_msg !== undefined) {
        const para = { prompt: this.prompt_msg };
        axios
          .get("http://localhost:8000/GPT/Chat", { params: para })
          .then((Response) => {
            const markdownText = Response.data;
            const md = new MarkdownIt();
            const renderedMarkdown = md.render(markdownText);
            this.current_chat.push(renderedMarkdown);
          })
          .catch((err) => {
            console.error(err);
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
  },
};
</script>

<style scoped>
.chat-div {
  width: 450px;
  text-align: center;
  padding: 2px;
  border: 1px solid;
  background-color: #101818;
}
.chat-div::-webkit-scrollbar {
  width: 0px;
}
.chat-body-even {
  height: auto;
  width: auto;
  max-width: 70%;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  background-color: #d1d3d7;
  text-align: left;
  padding: 0px 10px 10px 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  float: right;
  clear: both;
}
.chat-body-odd {
  height: auto;
  width: auto;
  max-width: 70%;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  background-color: #d1d3d7;
  text-align: left;
  padding: 0px 10px 10px 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
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
</style>
