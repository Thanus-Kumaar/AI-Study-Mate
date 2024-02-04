<template>
  <div class="top-logo-bar">
    <div class="logo" style="height: 60px">
      <img
        src="../../assets/Logo Text.svg"
        alt="logo"
        style="width: 100%; height: 100%"
      />
    </div>
    <div class="menu-container">
      <MainMenu />
    </div>
  </div>
  <div class="add-topic">
    <div class="add-button" @click="addTopic">New Topic</div>
  </div>
</template>

<script>
import MainMenu from "../Utilities/MainMenu.vue";

export default {
  data() {},
  components: {
    MainMenu,
  },
  methods: {
    addTopic() {
      this.$emit("add-topic");
    },
  },
};
</script>

<style scoped>
* {
  font: "Poppins", sans-serif;
  color: #ffffff;
}
.top-logo-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px 0 10px;
}
.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-topic {
  margin-top: 20px;
  margin-left: 10px;
}
.add-button {
  width: 100px;
  height: 30px;
  border-radius: 30px;
  padding: 10px 16px;
  font-size: large;
  font-weight: 200;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.add-button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 30px;
  padding: 2.5px;
  background: linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.add-button:hover {
  background: linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181));
}
.add-button:active {
  opacity: 0.6;
}
</style>
