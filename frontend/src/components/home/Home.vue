<template>
  <div class="page-div" style="background-color: #282e2e">
    <Hero />
    <div style="background-color: #282e2e; height: 190px">
      <div class="features">FEATURES</div>
      <div class="features-desc">Explore what our application can provide!</div>
    </div>
    <div class="feature-div">
      <div class="bg-div"></div>
      <div class="feature-flex">
        <Feature
          title="TOPICS"
          content="Learn topics exclusively using advanced AI tools at your disposal. Enter the topic to read and instantly receive high-quality content within seconds."
        />
        <Feature
          title="CHATBOT"
          content="Clarify doubts in real-time through interactive conversations with Bard AI via our chatbot and take your learning experience to the next level. Export chats as PDF to refer to them later."
        />
        <Feature
          title="QUIZZER"
          content="Test your knowledge on various topics using our quizzer. Get instant feedback and improve your learning experience."
        />
        <Feature
          title="POMODORO"
          content="Stay focused and manage your time effectively using our Pomodoro timer. Enhance your productivity and learning experience."
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Feature from "../home/feature.vue";
import Footer from "../home/footer.vue";
import Hero from "../home/hero.vue";
export default {
  data() {
    return {};
  },
  components: {
    Feature,
    Footer,
    Hero,
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

<style>
.features {
  width: 100%;
  text-align: center;
  font-family: poppins;
  font-size: 70px;
  font-weight: 300;
  color: white;
  padding-top: 20px;
  cursor: default;
}
.feature-div {
  margin: 0px 20px 0px 20px;
  border-radius: 10px;
  padding: 5px;
  background-color: #101818;
  cursor: default;
}
.features-desc {
  width: 100%;
  text-align: center;
  font-family: poppins;
  font-size: 25px;
  font-weight: 200;
  position: relative;
  top: -15px;
  color: white;
}
.features-text {
  width: 100%;
  text-align: center;
  font-family: poppins;
  font-size: 80px;
  font-weight: 100;
  z-index: 5;
  transition: 0.2s;
  background-color: #101818;
  color: white;
}
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
.bg-div {
  position: absolute;
  overflow: hidden;
  width: 100%;
}

.feature-flex {
  display: flex;
  flex-direction: column;
  border: 2px solid #101818;
}
</style>
