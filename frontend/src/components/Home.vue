<template>
  Hello
  <button @click="push">Main App</button>
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
      }
    }
  }
</script>