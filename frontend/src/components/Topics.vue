<template>
  <div class="topic-outer-div">
    <div v-for="topic in topics" class="topic-div">
      <div>{{ topic }}</div>
      <div class="topic-options">
        <i class="fa-regular fa-trash-can fa-sm"></i>
        <i class="fa-solid fa-pen-to-square fa-sm"></i>
        <i class="fa-solid fa-play fa-sm" v-on:click="this.learn(topic)"></i>
      </div>
    </div>
    <button @click="this.addTopic">Add</button>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        topics: ["Heap data strucutre","TCP protocol"],
      }
    },
    methods: {
      learn(t){
        this.$emit('topic-sent', t);
      },
      addTopic(){
        const t = prompt("Enter topic");
        this.topics.push(t);
      }
    }
  }
</script>

<style>
  .topic-outer-div{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    font-size: 17px;
    text-align: center;
    width: 300px;
    background-color:lavender;
    padding: 10px;
  }
  .topic-div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    padding-right: 0px;
    background-color: rgb(255, 138, 96);
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
  }
</style>