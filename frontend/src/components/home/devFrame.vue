<template>
  <div class="profile-card">
    <div class="profile-pic">
      <img :src="imgSrc" alt="profile-pic" />
    </div>
    <div class="content">
      <div class="name">{{ name }}</div>
      <div class="position">{{ Position }}</div>
      <div class="socials" v-if="socials && socials.length">
        <a v-if="socials[0]" :href="socials[0].link" title="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a v-if="socials[1]" :href="socials[1].link" title="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a v-if="socials[2]" :href="socials[2].link" title="GMail">
          <i class="far fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
  props: {
    name: String,
    imgSrc: String,
    Position: String,
    socials: Array,
  },
};
</script>

<style scoped>
* {
  color: white;
  font-family: "Poppins", sans-serif;
}
.profile-card {
  width: 350px;
  height: 500px;
  background-color: #101818;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  transition: 0.3s;
}

.profile-card:hover {
  transform: scale(1.05);
}

.profile-pic {
  width: 250px;
  height: 250px;
  border-radius: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}

.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  text-align: center;
}

.name {
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 10px;
}

.position {
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 20px;
}
.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
}
.socials a {
  margin: 0px 10px;
  color: white;
  transition: 0.2s;
}
.socials a:hover {
  transform: scale(1.1);
}
</style>
