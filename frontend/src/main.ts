import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


console.log("hi")
const app = createApp(App)

app.use(router)
app.mount('#app')
