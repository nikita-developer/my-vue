export default {
    state: {
        isAuth: false,
        token: 'welcome-klo',
    },
    mutations: {
        auth(state) {
            state.isAuth = true
        },
        token(state, dataToken) {
            state.token = dataToken
        }
    },
    getters: {
        isLogin(state) {
            return state.isAuth
        },
        token(state) {
            return state.token
        }
    }
}