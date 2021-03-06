import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import routers from './routers'

createApp(App).use(routers).use(store).mount('#app')