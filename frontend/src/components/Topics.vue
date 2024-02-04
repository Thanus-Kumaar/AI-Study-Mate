<template>
  <div class="topic-outer-div">
    <div style="font-size: 17px; font-weight: 700; color: #101818; background-color: #F2F4F8;">Topics</div>
    <div class="add-div">
      <button class="add-button" @click="this.addTopic">+</button>
    </div>
    <div v-for="(topic,index) in topics" class="topic-div" :key="index" @mouseenter="this.showOptions(index)" @mouseleave="this.hideOptions(index)">
      <div>{{ topic }}</div>
      <transition
      @leave="this.leave"
      @enter="this.enter"
      >
        <div v-if="this.options[index] == 1" class="topic-options">
          <div class="minor-options">
            <i class="fa-solid fa-trash-can" style="color: #101818; margin-top: 2px;" @click="this.del(topic)"></i>
            <i class="fa-solid fa-pen-to-square" style="color: #101818; margin-top: 2px;n" @click="this.rename(index)"></i>
          </div>
          <div style="background-color: #3E64B6; border-radius: 100%; width: 25px; height: 25px;" @click="this.learn(topic)">
            <div style="margin-top: 2px; margin-left: 1px;"><i class="fa-solid fa-play fa-sm" style="color: #F2F4F8;"></i></div>
          </div>
        </div>
      </transition>
    </div>
    <input placeholder="Type topic" v-model="this.inputVal" @blur="this.transferTopic" v-if="this.inInput==true" ref="Input" @keyup.enter="this.transferTopic">
  </div>
</template>

<script>
  import gsap from "gsap";
  export default{
    data(){
      return{
        topics: [],
        inputVal: "",
        inInput: false,
        options: [],
      }
    },
    methods: {
      learn(t){
        this.$emit('topic-sent', t);
      },
      addTopic(){
        this.inInput = true;
        this.$nextTick(()=>{
          this.$refs.Input.focus();
        })
      },
      transferTopic(){
        if(this.inputVal!= '' && this.inputVal!=undefined) this.topics.push(this.inputVal);
        this.inInput = false;
        this.inputVal = "";
        this.options.push(0);
        console.log("HELLO",this.options);
      },
      del(t){
        this.topics = this.topics.filter(topic => topic !== t);
      },
      rename(i){
        const new_t = prompt("Rename the topic");
        this.topics[i] = new_t;
      },
      showOptions(index){
        console.log(this.options);
        this.options[index] = 1;
      },
      hideOptions(index){
        this.options[index] = 0;
      },
      enter(){
        gsap.fromTo('.topic-options',{duration:0.1,opacity:0,y:-10},{opacity:1,y:0,ease:"expo"})
      },
      leave(){
        gsap.fromTo('.topic-options',{duration:1,opacity:1,y:0},{opacity:0,y:-10,ease:"power1.out"})
      },
    },
    mounted(){
      gsap.fromTo('.topic-outer-div',{duration:0.5, opacity:0, x:-100},{opacity:1, x:0, ease:"power3.in"})
    },
    beforeUnmount(){
      gsap.to('.topic-outer-div',{opacity:0, x:-100, ease:"power3.out"})
    }
  }
</script>

<style scoped>
  .topic-outer-div{
    margin: 5px 2px 0px 0px;
    font-family: poppins;
    font-size: 17px;
    text-align: center;
    width: 250px;
    overflow: scroll;
    background-color: #101818;
    flex: 1;
  }

  .topic-outer-div::-webkit-scrollbar{
    width: 0px;
  }
  .add-div{
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background-color: #101818;
    position: relative;
    top: -20px;
    left: 20px;
  }
  .add-button{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    position: relative;
    top: 5px;
    border: none;
    color: #FFFF;
    font-size: 20px;
    background-color: #3E64B6;
  }
  .topic-div{
    margin-top: 5px;
    padding: 5px;
    padding-right: 0px;
    font-size: 14px;
    font-weight: 600;
    width: 243px;
    background-color: #F2F4F8;
    border-radius: 3px;
  }
  input{
    padding: 5px;
    padding-right: 0px;
    background-color: #F2F4F8;
    width: 243px;
    min-width: 143px;
    text-align: center;
    font-size: 14px;
    font-family: poppins;
    border: none;
    outline: none;
    margin-top: 5px;
    border-radius: 3px;
  }
  .topic-options{
    background-color: #D1D3D7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    margin: 0px;
    width: 230px;
    padding: 5px;
  }

  .minor-options{
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    margin: 3px 0px 0px 7px;
  }

  input:focus{
    border: #3E64B6 2px solid;
  }
  i:hover{
    opacity: 0.5;
    color: #000;
  }
</style>