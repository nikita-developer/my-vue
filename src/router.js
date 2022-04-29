
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home', 
            component: Home
        },
        {
            path: '/login', 
            component: Login
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

export default router