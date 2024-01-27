<template>
  <div class="timer-div">
    <div class="upper-flex">
      <div class="current-timer">
        <div style="margin-top: 5px;">{{ Math.floor(this.seconds/60) }} : {{ this.seconds%60 }}</div>
      </div>
      <div class="change-timer" @click="this.changePomo">
        <div style="margin-top: 3px;"><i class="fa-solid fa-stopwatch fa-sm" style="color: #ffffff;"></i></div>
      </div>
    </div>
    <div class="lower-flex">
      <div class="reset-timer" @click="this.resetTimer">
        <i class="fa-solid fa-rotate" style="color: #ffffff; margin-top: 7px;"></i>
      </div>
      <div class="start-pause" @click="this.StartPause">
        {{ timerStatus }}
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        timer: null,
        started: false,
        seconds: 1500,
        timerStatus: "Start",
      }
    },
    methods:{
      StartPause(){
        if(this.started == false){
          this.started = true;
          this.timerStatus = "Pause";
          this.timer = setInterval(()=>{
            this.seconds = this.seconds-1;

          },1000)
        }
        else{
          this.started = false;
          this.timerStatus = "Start";
          clearInterval(this.timer);
        }
        console.log(this.sec)
      },
      changePomo(){
        if(this.seconds == 1500) this.seconds = 3000;
        else this.seconds = 1500;
      },
      resetTimer(){
        clearInterval(this.timer);
        this.seconds = 1500
        this.timerStatus = "Start"
      }
    }
  }
</script>

<style>

.timer-div{
  padding: 10px;
  background-color: #F2F4F8;
  margin-left: auto;
  margin-right: auto;
  width: 228px;
}

.upper-flex{
  display: flex;
  flex-direction: row;
  column-gap: 40px;
}

.current-timer{
  width: 120px;
  height: 40px;
  background-color: #D1D3D7;
  border-radius: 5px ;
  font-size: 20px;
  font-family: poppins;
  text-align: center;
}

.change-timer{
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #101818;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
}

.lower-flex{
  display: flex;
  flex-direction: row;
  column-gap: 45px;
  margin-top: 20px;
}

.reset-timer{
  width: 30px;
  height: 30px;
  background-color: #3E64B6;
  border-radius: 100%;
  margin-left: 10px;
  text-align: center;
}

.start-pause{
  width: 100px;
  height: 30px;
  background-color: #3E64B6;
  border-radius: 5px;
  color: white;
  font-family: poppins;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}

</style>