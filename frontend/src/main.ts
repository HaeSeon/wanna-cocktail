import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

const app = createApp(App)

axios.defaults.baseURL = "http://localhost:3000"

app.use(router)
app.mount('#app')
