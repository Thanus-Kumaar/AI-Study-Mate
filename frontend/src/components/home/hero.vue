<template>
  <div ref="VantaBG" class="bg">
    <div class="logo"><img src="../../assets/Logo Text.svg" alt="logo" /></div>
    <div class="bg-content">
      <div class="title-text">AI Study Mate</div>
      <div class="sub-title-text">Learn Smart, Learn Simple</div>
      <div class="visit">
        <button @click="push">Visit App</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    push() {
      this.$router.push("/app");
    },
    loadScript(callback) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/vanta@0.5.23/dist/vanta.fog.min.js";
      script.defer = true;
      script.onload = callback;
      document.head.appendChild(script);
    },
  },
  mounted() {
    this.loadScript(() => {
      this.vantaEffect = VANTA.FOG({
        el: this.$refs.VantaBG,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x424db1,
        midtoneColor: 0x4263d1,
        lowlightColor: 0x4d4dc7,
        baseColor: 0x0,
        blurFactor: 0.57,
        speed: 1.3,
      });
    });
  },
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100vh;
}
.bg-content {
  position: absolute;
  top: 40vh;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
}
.logo {
  position: absolute;
  top: 30px;
  left: 20px;
}
.title-text {
  font-family: poppins;
  font-weight: 100;
  font-size: 80px;
  color: white;
  text-align: center;
  cursor: default;
}
.sub-title-text {
  font-family: Poppins;
  font-weight: 200;
  font-size: 30px;
  color: white;
  text-align: center;
  cursor: default;
}
.visit {
  text-align: center;
  margin-top: 20px;
}
.visit > button {
  font-size: 20px;
  padding: 20px;
  border-radius: 40px;
  border: none;
  transition: 0.1s;
  width: 150px;
  cursor: pointer;
}
.visit > button:hover {
  transform: scale(1.1);
}
</style>
