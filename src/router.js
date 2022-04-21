
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: Home, alias: '/'},
        {path: '/about', component: About},
        {path: '/contacts', component: Contacts},
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})