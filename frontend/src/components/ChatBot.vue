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
      <div v-if="this.loading" class="chat-body-odd">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
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
  </div>
</template>

<script>
import axios from "axios";
import MarkdownIt from "markdown-it";

export default {
  data() {
    return {
      prompt_msg: "",
      loading: false,
      current_chat: [],
    };
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
  display: flex;
  flex-direction: column;
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
  padding: 5px;
  border-radius: 10px;
  background-color: #d1d3d7;
  text-align: left;
  padding: 0px 10px 10px 10px;
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

.chat-body-odd > div {
  width: 10px;
  height: 10px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.chat-body-odd .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.chat-body-odd .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
