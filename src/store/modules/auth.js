export default {
    state: {
        isAuth: false,
    },
    mutations: {
        auth(state) {
            state.isAuth = true
        }
    },
    getters: {
        isLogin(state) {
            return state.isAuth
        }
    }
}