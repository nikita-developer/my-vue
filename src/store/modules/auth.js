export default {
    state: {
        isAuth: false,
    },
    getters: {
        allLogin(state) {
            return state.isAuth
        }
    }
}