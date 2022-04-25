<template>
    <div class="cards" v-for="card in cards" :key="card.id">
        <div class="card">
            <div class="card__count">{{card.id}}</div>
            <div class="card__media"></div>
            <hr>
            <div class="card__title">{{card.name}}</div>
            <div class="card__description">{{card.description}}</div>
            <div class="card__deleted" @click="deletedCard(cards)">Удалить</div>
        </div>
    </div>
</template>

<script>
    import cards from '../../store/data'
    export default {
        computed: {
            cards() {
                return this.$store.state.cards.cards
            }
        },
        methods: {
            deletedCard(cards) {
                this.$store.dispatch('deleted', () => cards.forEach(i))
            }
        },
        created() {
            this.$store.dispatch('getCards', cards)
        },
    }
</script>

<style lang="scss" scoped>
    .cards {
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        width: 200px;
        padding: 15px;
        border: 1px solid #ccc;
        margin: 15px;

        &__media {
            height: 120px;
            background-color: #ccc;
        }

        &__title {
            font-weight: 700;
            font-size: 15px;
        }

        &__description {
            font-size: 13px;
            color: #838383;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .card__deleted {
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: center;
            padding: 5px 10px;
            font-size: 12px;
            color: #838383;
            cursor: pointer;

            &:hover {
                transform: scale(0.98);
            }
        }
    }
</style>