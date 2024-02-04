import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Display from "./components/app/Display.vue";
import Topic from "./components/app/Left Frame/TopicSection.vue";
import ChatBot from "./components/app/Right Frame/ChatBot.vue";
import Pomodoro from "./components/app/Left Frame/Pomodoro.vue";
import MainApp from "./components/app/MainApp.vue";
import Home from "./components/home/Home.vue";
import LeftFrame from "./components/app/Left Frame/LeftFrame.vue";
import RightFrame from "./components/app/Right Frame/RightFrame.vue";
import Quiz from "./components/app/Right Frame/Quiz.vue";

const app = createApp(App);
app.component("display", Display);
app.component("topic", Topic);
app.component("chat-bot", ChatBot);
app.component("pomo-timer", Pomodoro);
app.component("left-frame", LeftFrame);
app.component("right-frame", RightFrame);
app.component("quiz", Quiz);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/app", component: MainApp },
  ],
});

app.use(router);
app.mount("#app");
