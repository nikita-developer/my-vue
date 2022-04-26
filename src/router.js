
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: Home, alias: '/'},
        {path: '/login', component: Login},
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})