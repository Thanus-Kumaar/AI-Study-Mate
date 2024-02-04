<template>
  <footer class="footer">
    <div class="footer-logo">
      <img src="../../assets/Logo Text.svg" alt="logo" height="70px" />
    </div>
    <p>&copy; 2024 AI Study Mate. All rights reserved.</p>
    <div class="scroll-button" @click="scrollToTop">&#11165;</div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #282e2e;
  height: 45px;
  font-family: poppins;
  color: white;
  font-weight: 200;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
}

.scroll-button {
  position: relative;
  padding: 15px;
  font-weight: 300;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.scroll-button:hover {
  cursor: pointer;
}

.scroll-button:active {
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181));
  border-radius: 50%;
  color: #101818;
}
</style>
