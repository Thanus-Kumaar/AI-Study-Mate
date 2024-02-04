<template>
  <div class="topic-outer-div">
    <RightHeader @add-topic="newTopic" />
    <div class="topics-container">
      <div v-for="(topic, index) in topics" class="topic-div" :key="index">
        <div class="active-button">
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50%"
              cy="50%"
              r="6"
              fill="none"
              stroke="rgb(62, 100, 182)"
              stroke-width="1"
            />
          </svg>
        </div>
        <div @click="this.learn(topic)" class="individual-topic">
          {{ topic }}
        </div>
      </div>
      <input
        placeholder="Type topic"
        v-model="this.inputVal"
        @blur="this.enterTopicName"
        v-if="this.inInput == true"
        ref="Input"
        @keyup.enter="this.enterTopicName"
      />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import RightHeader from "./LogoHeader.vue";
export default {
  data() {
    return {
      topics: [],
      inputVal: "",
      inInput: false,
      options: [],
    };
  },
  methods: {
    learn(t) {
      this.$emit("topic-sent", t);
    },
    newTopic() {
      this.inInput = true;
      this.$nextTick(() => {
        this.$refs.Input.focus();
      });
    },
    enterTopicName() {
      if (this.inputVal != "" && this.inputVal != undefined)
        this.topics.push(this.inputVal);
      this.inInput = false;
      this.inputVal = "";
      this.options.push(0);
    },
    del(t) {
      this.topics = this.topics.filter((topic) => topic !== t);
    },
    rename(i) {
      const new_t = prompt("Rename the topic");
      this.topics[i] = new_t;
    },
  },
  mounted() {
    gsap.fromTo(
      ".topic-outer-div",
      { duration: 0.5, opacity: 0, x: -100 },
      { opacity: 1, x: 0, ease: "power3.in" }
    );
  },
  beforeUnmount() {
    gsap.to(".topic-outer-div", { opacity: 0, x: -100, ease: "power3.out" });
  },
  components: { RightHeader },
};
</script>

<style scoped>
.topic-outer-div {
  font-family: poppins;
  font-size: 17px;
  text-align: center;
  width: 100%;
  overflow: scroll;
  background-color: #282e2e;
  flex: 1;
  margin: 25px 0 0 0;
}
.topic-outer-div::-webkit-scrollbar {
  width: 0px;
}
.topics-container {
  margin: 20px 10px 20px 10px;
  height: 400px;
  overflow-y: scroll;
}
.topics-container::-webkit-scrollbar{
  width: 0px;
}
.topic-div {
  display: flex;
  flex-direction: row;
  color: white;
  border-radius: 10px;
  cursor: default;
  padding: 10px 5px 10px 5px;
}
input {
  width: 90%;
  padding: 10px 5px 10px 15px;
  background-color: #282e2e;
  border: none;
  outline: none;
  margin-top: 5px;
  border-radius: 10px;
  color: white;
  font-family: poppins;
  font-weight: 200;
  font-size: 16px;
}
input:focus {
  background-color: #101818;
}
.active-button {
  margin: 0 10px 0 0;
}
.individual-topic {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
  width: 90%;
  text-align: left;
  font-weight: 200;
  font-size: 16px;
}
.topic-div:hover {
  background-color: #101818;
  cursor: pointer;
}
</style>
