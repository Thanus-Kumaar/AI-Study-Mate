import { createApp } from 'vue'
import App from './App.vue'
import Display from './components/Display.vue'
import Topic from './components/Topics.vue'
import ChatBot from './components/ChatBot.vue'
import Pomodoro from './components/Pomodoro.vue'

const app = createApp(App)
app.component("display", Display)
app.component("topic", Topic)
app.component("chat-bot", ChatBot)
app.component("pomo-timer", Pomodoro)
app.mount('#app')
