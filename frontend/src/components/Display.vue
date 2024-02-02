<template>
  <div class="main-div">
    <div class="loading-div" v-if="this.loading">
      <TopicLoading />
    </div>
    <div v-html="renderedMarkdown" v-else></div>
    <div
      style="display: flex; justify-content: right"
      v-if="this.markdownText != ''"
    >
      <div class="save" @click="this.SaveTopic">Save</div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import axios from "axios";
import TopicLoading from "./Utilities/topicLoading.vue";
import Topics from "./Topics.vue";

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
  },
};
</script>

<style scoped>
.main-div {
  background-color: #f2f4f8;
  width: 1100px;
  max-height: 100%;
  overflow: scroll;
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  position: relative;
}

.main-div::-webkit-scrollbar{
  width: 0px;
}
.loading-div {
  text-align: center;
  font-size: 24px;
  padding: 10px;
  margin: auto; 
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
  margin-top: 10px; /* Add some space between the loading div and the save button */
}
</style>