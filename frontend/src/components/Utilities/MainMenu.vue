<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#">Profile</a></li>
      <li><a class="menu__item" href="#">Settings</a></li>
      <li><a class="menu__item" href="#">History</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>

<style>
#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
  z-index: 2; /* Set a higher z-index for .menu__box */
}
.menu__btn {
  position: fixed;
  top: 30px;
  left: 200px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: white;
  transition-duration: 0.25s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}
.menu__box {
  display: block;
  position: absolute;
  top: 0;
  left: -100%;
  width: 250px;
  height: 100%;
  margin-top: 70px;
  padding: 0 0;
  list-style: none;
  background-color: #282e2e;
  transition-duration: 0.25s;
  z-index: 2; /* Set a higher z-index for .menu__box */
}
.menu__item {
  display: block;
  padding: 8px 24px;
  margin: 0 8px;
  border-radius: 10px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 200;
  text-decoration: none;
  transition-duration: 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu__item:hover {
  background: linear-gradient(to right, rgb(62, 100, 182), rgb(125, 144, 181));
}
</style>
