import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './scss/main.scss'
import store from './store/store.js'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
