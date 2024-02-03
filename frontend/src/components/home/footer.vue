<template>
  <footer class="footer">
    <div class="footer-logo">
      <img src="../../assets/Logo Text.svg" alt="logo" height="70px" />
    </div>
    <p>&copy; 2024 AI Study Mate. All rights reserved.</p>
    <div class="contact">Contact Team</div>
  </footer>
</template>

<script></script>

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

.contact {
  position: relative;
  padding: 20px;
  font-weight: 300;
}

.contact::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50px;
  padding: 2px;
  background: linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.contact:hover {
  cursor: pointer;
  font-weight: 500;
}

.contact:active {
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181));
  border-radius: 50px;
  color: #101818;
}
</style>
