import { createStore } from 'vuex'
import post from './modules/post'
import users from './modules/users'
import cards from './modules/cards'

export default createStore({
    modules: {
        post,
        users,
        cards,
    },
})