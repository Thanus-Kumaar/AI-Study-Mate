<template>
  <div class="loading-div">
    <div class="loading-spinner"></div>
    <p>{{ textprop }}</p>
  </div>
</template>

<script>
</script>

<style scoped>
.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto; /* Adjust margin as needed */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
