export default {
    state: {
        users: [],
    },
    actions: {
        async fetchUsers({commit}) {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await res.json()
            commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        }
    },
    getters: {
        allUsers(state) {
            return state.users
        }
    }
}