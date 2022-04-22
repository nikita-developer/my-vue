
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'

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