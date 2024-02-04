<template>
  <div class="right-header">
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
</template>

<script>
import MainMenu from "../Utilities/MainMenu.vue";

export default {
  data() {},
  components: {
    MainMenu,
  },
};
</script>

<style scoped>
.right-header {
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
</style>
