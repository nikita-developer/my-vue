
export default {
    state: {
        cards: [],
    },
    actions: {
        loadCards(context, cards) {
            context.commit('loadCards', cards)
        },
        deleted(context, id) {
            context.commit('deleted', id)
        }
    },
    mutations: {
        loadCards(state, payload) {
            state.cards = payload
        },
        deleted(state, id) {
            state.cards.splice(id, 1)
        }
    },
    getters: {
        getCards(state) {
            return state.cards
        }
    }
}