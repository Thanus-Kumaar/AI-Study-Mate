<template>
  <div @click="this.learn(topic)" class="topic-div">
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
    <div class="individual-topic">
      {{ topic }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topic: String,
  },
  methods: {
    learn(t) {
      console.log("Got topic", t);
      this.$emit("topic-sent", t);
    },
  },
};
</script>

<style scoped>
.active-button {
  margin: 0 10px 0 0;
}
.individual-topic {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
  width: 75%;
  text-align: left;
  font-weight: 200;
  font-size: 16px;
}
.topic-div {
  display: flex;
  flex-direction: row;
  color: white;
  border-radius: 10px;
  cursor: default;
  padding: 10px 5px 10px 5px;
}
.topic-div:hover {
  background-color: #101818;
  cursor: pointer;
}
</style>
