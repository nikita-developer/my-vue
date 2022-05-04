import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
