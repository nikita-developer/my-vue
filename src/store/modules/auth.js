import router from '../../router'

export default {
    state: {
        auth: false,
        token: '',
        error: '',
    },
    actions: {
        GET_TOKEN: async (context, payload) => {
            let response = await fetch('http://spasdeveloper.ru/cdek/php/auth/token.php')
            let data = await response.json()
            context.commit('SET_TOKEN', data)
        },

        GET_AUTH: async (context, payload) => {
            let response = await fetch('http://spasdeveloper.ru/cdek/php/auth/auth.php', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        login: payload.login,
                        password: payload.password
                    }
                ),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = await response.json()
            if(data) {
                context.commit('SET_ERROR', '')
                context.commit('SET_AUTH', data)
            } else {
                context.commit('SET_ERROR', 'Нет такого логина или пароля')
            }
        }
    },
    mutations: {
        SET_TOKEN: (state, payload) => {
            state.token = payload
        },

        SET_AUTH: (state, payload) => {
            localStorage.setItem('cdek-auth', payload)
            state.token = payload
            state.auth = true
            router.push('/')
        },

        SET_ERROR: (state, payload) => {
            state.error = payload
        }
    },
    getters: {
        TOKEN: (state) => {
            return state.token
        },

        AUTH: (state) => {
            return state.auth
        },

        ERROR: (state) => {
            return state.error
        }
    }
}