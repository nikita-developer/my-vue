
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: Home, alias: '/'},
        {path: '/about', component: About},
        {path: '/contacts', component: Contacts},
        {path: '/login', component: Login},
        {path: '/logout', component: Logout},
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})