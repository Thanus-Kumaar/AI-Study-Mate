<template>
  <div class="topic-outer-div">
    <span style="font-size: 20px; font-weight: 500; color: #F2F4F8;">Topics to Learn</span>
    <div v-for="topic in topics" class="topic-div">
      <div>{{ topic }}</div>
      <div class="topic-options">
        <i class="fa-regular fa-trash-can fa-sm" @click="this.del(topic)"></i>
        <i class="fa-solid fa-pen-to-square fa-sm" @click="this.rename(topic)"></i>
        <i class="fa-solid fa-play fa-sm" @click="this.learn(topic)"></i>
      </div>
    </div>
    <button @click="this.addTopic">Add</button>
  </div>
</template>

<script>
  import gsap from "gsap";
  export default{
    data(){
      return{
        topics: [],
      }
    },
    methods: {
      learn(t){
        this.$emit('topic-sent', t);
      },
      addTopic(){
        const t = prompt("Enter topic");
        if(t!= '' && t!=undefined) this.topics.push(t);
      },
      del(t){
        this.topics = this.topics.filter(topic => topic !== t);
      },
      rename(t){
        const new_t = prompt("Rename the topic");
        const i = this.topics.indexOf(t);
        this.topics[i] = new_t;
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
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    font-size: 17px;
    text-align: center;
    width: 300px;
    min-height: 600px;
    background-color: #101818;
    padding: 10px;
  }
  .topic-div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    padding-right: 0px;
    background-color: #F2F4F8;
  }
  .topic-options{
    width: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 5px;
    margin: 5px 0px 0px 5px;
  }
  i:hover{
    opacity: 0.5;
    color: #000;
  }
</style>