<template>
  <div class="left-frame">
    <topic @topic-sent="gotTopic" />
    <pomo-timer />     
  </div>
</template>

<script>
export default {
  name: 'LeftFrame',
  data () {
    return {
      topics: []
    }
  },
  methods: {
    gotTopic (t) {
      console.log('Got topic-left-frame', t);
      this.$emit('topic-sent', t)
    }
  }
}
</script>

<style scoped>
  .left-frame{
    display: flex;
    flex-direction: column;
    width: 250px;
  }
</style>
