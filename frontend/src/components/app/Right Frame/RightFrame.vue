<template>
  <div class="right-frame">
    <div class="button-pannel">
      <div class="add-button" @click="this.ToggleChatQuiz(1)" :style="{'background': this.isChat?'linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181))':''}">Chat</div>
      <div class="add-button" @click="this.ToggleChatQuiz(0)" :style="{'background': !this.isChat?'linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181))':''}">Quiz</div>
    </div>
    <chat-bot v-if="this.isChat" />
    <quiz v-else />
  </div>
</template>

<script>
  export default{
    data() {
      return{
        isChat: true,

      }
    },
    methods:{
      ToggleChatQuiz(flag){
        if(flag==1){
          this.isChat = true;
        }
        else{
          this.isChat = false;
        }
      },
    }
  }
</script>

<style scoped>
  *{
    font-family: 'Poppins',sans-serif;
  }
  .right-frame{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 450px;
    box-sizing: border-box;
  }
  .button-pannel{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 35px 0 20px 0;
    color: white;
  }
  .add-button {
  width: 70px;
  height: 20px;
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 16px;
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