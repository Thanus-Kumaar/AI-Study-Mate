<template>
  <div class="feat">
    <div class="features-text">{{ title }}</div>
    <div class="desc">
      <div style="width: 900px; margin-left: auto; margin-right: auto">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
.feat {
  border: 1px solid #101818;
  position: relative;
}
.feat:hover > .features-text {
  opacity: 0;
}
.feat:hover > .desc {
  opacity: 100;
}
.desc {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 0;
  background: linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181));
  color: #101818;
  text-align: center;
  font-family: poppins;
  font-weight: 400;
  font-size: 20px;
  padding-top: 30px;
  opacity: 0;
  transition: 0.3s;
  border-radius: 10px;
}
</style>
