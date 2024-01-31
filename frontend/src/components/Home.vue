<template>
  <div class="page-div">
    <div ref="VantaBG" class="bg">
      <div class="bg-content">
        <div class="title-text">AI Study Mate</div>
        <div class="sub-title-text">
          Smart Minds, Smarter Studying - Your Ultimate Companion
        </div>
        <div class="visit">
          <button @click="push">Visit App</button>
        </div>
        
      </div>
    </div>
    <div style="background-color: #101818; height: 200px;">
      <div class="features">
        FEATURES
      </div>
      <div class="features-desc">
        Explore what our application can provide!
      </div>
    </div>
    <div class="feature-div">
      <div class="bg-div">

      </div>
      <div class="feature-flex">
        <div class="feat">
          <div class="features-text">
            TOPICS
          </div>
          <div class="desc">
            <div style="width: 900px; margin-left: auto; margin-right: auto;">Learn topics exclusively using advanced AI tools at your disposal. Enter topic to read and instanly recieve high quality content within seconds</div>
          </div>
        </div>
        <div class="feat">
          <div class="features-text">
            CHAT BOT
          </div>
          <div class="desc">
            <div style="width: 900px; margin-left: auto; margin-right: auto;">Clarify doubts in real-time through interactive conversations with Bard AI via our chatbot and take your learning experience to next level. Export chats as Pdf to refer them later</div>
          </div>
        </div>
        <div class="feat">
          <div class="features-text">
            QUIZZER
          </div>
          <div class="desc">
            <div style="width: 900px; margin-left: auto; margin-right: auto;">Learn topics exclusively using advanced AI tools at your disposal. Enter topic to read and instanly recieve high quality content within seconds</div>
          </div>
        </div>
        <div class="feat">
          <div class="features-text">
            POMODORO
          </div>
          <div class="desc">
            <div style="width: 900px; margin-left: auto; margin-right: auto;">Learn topics exclusively using advanced AI tools at your disposal. Enter topic to read and instanly recieve high quality content within seconds</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
      };
    },
    methods:{
      push(){
        this.$router.push('/app');
      },
      loadScript(callback) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/vanta@0.5.23/dist/vanta.fog.min.js';
        script.defer = true;
        script.onload = callback;
        document.head.appendChild(script);
      }
    },
    mounted(){
      this.loadScript(() => {
      // Initialize Vanta Fog effect
      this.vantaEffect = VANTA.FOG({
        el: this.$refs.VantaBG,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x2a1abd,
        midtoneColor: 0x1c1cdb,
        lowlightColor: 0xe7e7ed,
        baseColor: 0x1e1e1f,
        blurFactor: 0.59,
        speed: 1.10,
        zoom: 1.70
      });
    });
    }
  }
</script>

<style>
.bg{
  width: 100%;
  height: 100vh;
}

.bg-content{
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
}

.title-text{
  font-family: poppins;
  font-weight: 100;
  font-size: 80px;
  color: white;
  text-align: center;
}

.sub-title-text{
  font-family: Poppins;
  font-weight: 200;
  font-size: 30px;
  color: white;
  text-align: center;
}

.visit{
  text-align: center;
  margin-top: 20px;
}

.visit>button{
  font-size: 20px;
  padding: 20px;
  border-radius: 40px;
  border: none;
  transition: 0.1s;
  width: 150px;
}
.visit>button:hover{
  transform: scale(1.1);
}
.features{
  width: 100%;
  text-align: center;
  font-family: poppins;
  font-size: 70px;
  font-weight: 300;
  color: white;
  padding-top: 20px;
}
.features-desc{
  width: 100%;
  text-align: center;
  font-family: poppins;
  font-size: 25px;
  font-weight: 200;
  position: relative;
  top: -15px;
  color: white;
}
.features-text{
  width: 100%;
  text-align: center;
  font-family: poppins;
  font-size: 80px;
  font-weight: 300;
  z-index: 5;
  transition: 0.2s;
}
.feat{
  border: 1px solid #101818;
  position: relative;
}
.feat:hover>.features-text{
  opacity: 0;
}
.feat:hover>.desc{
  opacity: 100;
}
.desc{
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;
  background-color: #101818;
  color: white;
  text-align: center;
  font-family: poppins;
  font-weight: 200;
  padding-top: 30px;
  opacity: 0;
  transition: 0.3s;
}
.bg-div{
  position: absolute;
  overflow: hidden;
  width: 100%;
}

.feature-flex{
  display: flex;
  flex-direction: column;
  border: 2px solid #101818;
}
</style>