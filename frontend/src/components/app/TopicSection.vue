<template>
  <div class="topic-outer-div">
    <RightHeader @add-topic="newTopic" />
    <div class="topics-container">
      <div v-for="(topic, index) in topics" class="topic-div" :key="index">
        <div class="active-button">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <!-- Adding a circular border around the existing circle -->
            <circle
              cx="50%"
              cy="50%"
              r="9"
              fill="none"
              stroke="rgb(62, 100, 182)"
              stroke-width="1"
            />
            <!-- Centering the circle inside the SVG -->
            <circle cx="50%" cy="50%" r="8" :fill="circleFillColor" />
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
import RightHeader from "./RightHeader.vue";
export default {
  data() {
    return {
      topics: [],
      inputVal: "",
      inInput: false,
      options: [],
      circleFillColor: "#282e2e",
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
    changeFillColor(newColor) {
      this.circleFillColor = newColor;
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
  width: 250px;
  overflow: scroll;
  background-color: #282e2e;
  flex: 1;
}
.topic-outer-div::-webkit-scrollbar {
  width: 0px;
}
.topics-container {
  margin: 20px 10px 20px 10px;
}
.topic-div {
  display: flex;
  flex-direction: row;
  color: white;
  margin: 0 0 0 5px;
  border-radius: 10px;
}
input {
  width: 85%;
  padding: 5px 15px 5px 15px;
  background-color: #282e2e;
  font-family: poppins;
  border: none;
  outline: none;
  margin-top: 5px;
  border-radius: 20px;
  color: white;
  font-weight: 200;
  font-size: 14px;
}
input:focus {
  background-color: #101818;
}
.active-button {
  margin: 0 10px 0 0;
}
.individual-topic {
  display: flex;
  align-items: center; /* Add this line to vertically center the content */
}
</style>
