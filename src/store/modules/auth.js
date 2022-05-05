export default {
    state: {
        isAuth: true,
    },
    mutations: {
        auth(state) {
            state.isAuth = false
        }
    },
    getters: {
        isLogin(state) {
            return state.isAuth
        }
    }
}