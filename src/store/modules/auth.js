export default {
    state: {
        isAuth: false,
        token: '',
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
        },
        async updateToken(state) {
            let response = await fetch('http://spasdeveloper.ru/cdek/php/auth/token.php')
            let result = await response.json()
            console.log(result);
            return state.token = result
        }
    }
}