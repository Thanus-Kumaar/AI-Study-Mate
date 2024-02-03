<template>
  <div class="page-div" style="background-color: #282e2e">
    <div class="hero-wrapper" style="height: 100vh">
      <Hero />
    </div>
    <div class="feature-wrapper" style="height: 100vh">
      <div style="background-color: #282e2e; height: 190px">
        <div class="features">FEATURES</div>
        <div class="features-desc">
          Explore what our application can provide!
        </div>
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
    </div>
    <div class="devs-wrapper" style="height: 100vh">
      <div style="background-color: #282e2e; height: 150px">
        <div class="developers">DEVELOPERS</div>
      </div>
      <div class="dev-flex">
        <DevFrame
          name="Tharun Kumarr A"
          :imgSrc="tharunImg"
          Position="Frontend Developer"
          :socials="[
            { name: 'GitHub', link: 'abc' },
            { name: 'LinkedIn', link: 'abc' },
            { name: 'GMail', link: 'abc' },
          ]"
        />
        <DevFrame
          class="dev-frame"
          name="Thanus Kumaar A"
          :imgSrc="thanusImg"
          Position="Backend Developer"
          :socials="[
            { name: 'GitHub', link: 'abc' },
            { name: 'LinkedIn', link: 'abc' },
            { name: 'GMail', link: 'abc' },
          ]"
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
import DevFrame from "../home/devFrame.vue";

import tharunImg from "../../assets/tharun.webp";
import thanusImg from "../../assets/thanus.webp";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return { tharunImg, thanusImg };
  },
  components: {
    Feature,
    Footer,
    Hero,
    DevFrame,
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
    // Feature Wrapper
    gsap.to(".feature-wrapper", {
      scrollTrigger: {
        trigger: ".feature-wrapper",
        start: "top 80%", // Start scrolling down when 80% of the current wrapper is visible
        end: "top 20%", // Snap to the top when 20% of the current wrapper is visible
        scrub: true, // Enables a smooth scrubbing effect
        markers: true, // Remove this line in production, it's for debugging
      },
      y: 0, // Snap to the top
    });

    // Devs Wrapper
    gsap.to(".devs-wrapper", {
      scrollTrigger: {
        trigger: ".devs-wrapper",
        start: "top 80%", // Start scrolling down when 80% of the current wrapper is visible
        endTrigger: "body", // Change to the next wrapper or any other end trigger
        end: "top 20%", // Start scrolling up when 20% of the next wrapper is visible
        scrub: true, // Enables a smooth scrubbing effect
        markers: true, // Remove this line in production, it's for debugging
      },
      y: 0, // Snap to the top
    });

    // Initialize Vanta after setting up ScrollTrigger
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

.developers {
  width: 100%;
  text-align: center;
  font-family: poppins;
  font-size: 70px;
  font-weight: 300;
  color: white;
  padding-top: 20px;
  cursor: default;
}

.dev-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
</style>
