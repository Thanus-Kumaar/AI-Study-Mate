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
    <div>Hola Amigos</div>
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
</style>