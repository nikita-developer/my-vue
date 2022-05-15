
import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import About from './pages/About/About'
import Job from './pages/Job/Job'
import NotFound from './pages/NotFound/NotFound'
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
            path: '/about',
            component: About,
            meta: {
                all: true
            }
        },
        {
            path: '/job',
            component: Job,
            meta: {
                all: true
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                myLogin: true
            }
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
        },
        {
            path: "/:catchAll(.*)",
            redirect: '/404'
        }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
    fetch('http://spasdeveloper.ru/cdek/php/auth/token.php')
    .then(response => response.json())
    .then(data => {
        store.dispatch('GET_TOKEN', data)

        const requireAuth = localStorage.getItem('cdek-auth') == store.getters.TOKEN

        if(requireAuth) {
            store.dispatch('GET_AUTH', true)
        }

        if(to.meta.login && !requireAuth) {
            return next('/login')
        }

        if(requireAuth && to.meta.myLogin) {
            return next('/')
        }
        return next()
    })
})

export default router