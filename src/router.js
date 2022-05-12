
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import store from './store/store.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: Home,
            meta: {
                login: true
            }
        },
        {
            path: '/login', 
            component: Login,
            name: 'login',
            meta: {
                login: false
            }
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
    const requireUser = to.meta.login
    const requireAuth = localStorage.getItem('cdek-auth') == store.getters.TOKEN ? true : false
    console.log(store.getters.TOKEN);

    if(requireUser && !requireAuth) {
        next('/login')
    } else if (!requireUser && requireAuth) {
        next('/')
    } else {
        next()
    }
})

export default router