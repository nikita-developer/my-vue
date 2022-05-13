
export default {
    state: {
        auth: false,
        token: '',
    },
    actions: {
        GET_TOKEN: async (context, payload) => {
            context.commit('SET_TOKEN', payload)
        },

        GET_AUTH: async (context, payload) => {
            context.commit('SET_AUTH', payload)
        }
    },
    mutations: {
        SET_TOKEN: (state, payload) => {
            state.token = payload
        },

        SET_AUTH: (state, payload) => {
            state.auth = payload
        },
    },
    getters: {
        TOKEN: (state) => {
            return state.token
        },

        AUTH: (state) => {
            return state.auth
        },
    }
}