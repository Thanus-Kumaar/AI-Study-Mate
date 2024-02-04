<template>
  <div class="main-div">
    <div class="loading-div" v-if="this.loading">
      <TopicLoading />
    </div>
    <div class="rendering-div" v-else>
      <div class="topic-name">{{ this.toTitleCase(this.topic) }}</div>
      <div v-html="renderedMarkdown" class="markdown-div"></div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import axios from "axios";
import TopicLoading from "../Utilities/topicLoading.vue";
import Topics from "./TopicSection.vue";

export default {
  data() {
    return {
      markdownText: "",
      renderedMarkdown: "",
      loading: false,
    };
  },
  props: {
    topic: {
      type: String,
      required: true,
    },
  },
  components: {
    TopicLoading,
    Topics,
  },
  watch: {
    topic: {
      handler(newVal, oldVal) {
        if (newVal != "" && newVal != undefined) this.getTopic(newVal);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    getTopic(topic) {
      this.loading = true;
      const para = { topic: topic };
      axios
        .get("http://localhost:8000/GPT/LearnTopic", { params: para })
        .then((Response) => {
          this.loading = false;
          console.log(Response.data);
          this.markdownText = Response.data;
          const md = new MarkdownIt();
          this.renderedMarkdown = md.render(this.markdownText);
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
          this.renderedMarkdown = "An ERROR occured in Server !"
          alert(err);
        });
    },
    SaveTopic() {
      console.log(this.topic);
      const text = this.markdownText.slice(
        0,
        this.markdownText.indexOf("[https")
      );
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
      const day = currentDate.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      axios
        .post("http://localhost:8000/study/saveTopic", {
          topic: this.topic,
          date: formattedDate,
          content: text,
          user_ID: 1,
        })
        .then((Response) => {
          console.log(Response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
  },
};
</script>

<style scoped>
* {
  font-family: poppins;
}
.main-div {
  background-color: #101818;
  color: #c3c3c3;
  padding: 10px 50px 10px 50px;
  margin: 25px 5px 15px 5px;
  flex: 1;
  border-radius: 15px;
  position: relative;
  font-weight: 200;
  font-size: 15px;
}
.loading-div {
  text-align: center;
  margin: auto;
}
.topic-name{
  display: block;
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 5px;
  background-color: #101818;
  z-index: 2;
  border-radius: 10px;
}
.markdown-div{
  height: 100%;
  overflow: scroll;
}
.rendering-div{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.markdown-div::-webkit-scrollbar {
  width: 0px;
}
.save {
  text-align: center;
  width: 100px;
  font-family: poppins;
  font-size: 13px;
  background-color: #3498db;
  padding: 5px;
  color: #f2f4f8;
  border-radius: 7px;
  z-index: 10;
  margin-top: 10px;
  position: absolute;
  bottom: 0px;
}
</style>
