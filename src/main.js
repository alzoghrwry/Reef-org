import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createAppRouter } from '@routes'

// Create router instance
const router = createAppRouter()

// Create and mount app
const app = createApp(App)
app.use(router)
app.mount('#app')
