
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import store from './store/store.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: Home,
        },
        {
            path: '/login', 
            component: Login,
            name: 'login',
            meta: {
                login: true
            }
        },
        {
            path: '/registration', 
            component: Registration,
            name: 'registration',
            meta: {
                login: true
            }
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
    const requireUser = to.meta.login
    const requireAuth = localStorage.getItem('cdek-auth')
    if(requireAuth) {
        store.commit('auth')
    }

    if(requireUser && requireAuth) {
        next('/')
    } else {
        next()
    }
})

export default router