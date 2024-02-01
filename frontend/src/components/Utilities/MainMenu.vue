<template>
  <div id="menuToggle">
    <input type="checkbox" v-model="isMenuOpen" />
    <span></span>
    <span></span>
    <span></span>
    <transition name="fade">
      <ul id="menu" v-if="isMenuOpen">
        <a href="#"><li>History</li></a>
        <a href="#"><li>Profile</li></a>
        <a href="#"><li>Settings</li></a>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style>
#menuToggle {
  display: block;
  position: relative;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;
}

#menuToggle a:hover {
  color: #3e64b6;
}

#menuToggle input {
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  cursor: pointer;
  top: -7px;
  left: -5px;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.2s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.2s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.2s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(0px, 1px);
  background: #cdcdcd;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 150px;
  padding: 50px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-90%, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  
}
</style>
