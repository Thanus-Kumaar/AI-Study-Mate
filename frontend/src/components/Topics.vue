<template>
  <div class="topic-outer-div">
    <span style="font-size: 20px; font-weight: 500;">Topics to Learn</span>
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
        this.topics.push(t);
      },
      del(t){
        this.topics = this.topics.filter(topic => topic !== t);
      },
      rename(t){
        const new_t = prompt("Rename the topic");
        const i = this.topics.indexOf(t);
        this.topics[i] = new_t;
      },
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
    min-height: 600px;
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