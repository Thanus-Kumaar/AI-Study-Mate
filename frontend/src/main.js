import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';

import Display from './components/Display.vue'
import Topic from './components/Topics.vue'
import ChatBot from './components/ChatBot.vue'
import Pomodoro from './components/Pomodoro.vue'
import MainApp from './components/MainApp.vue'
import Home from './components/home/Home.vue'

const app = createApp(App)
app.component("display", Display)
app.component("topic", Topic)
app.component("chat-bot", ChatBot)
app.component("pomo-timer", Pomodoro)

const router = createRouter({
  history: createWebHistory(),
  routes: [{path:'/', component: Home},{path:'/app', component:MainApp}],
})

app.use(router)
app.mount('#app')
