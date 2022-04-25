<template>
    <div class="card" v-for="user in allUsers" :key="user.id">
        <div class="card__username">{{user.name}}</div>
        <hr>
        <div class="card__email">{{user.email}}</div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        computed: mapGetters(['allUsers']),
        methods: mapActions(['fetchUsers']),
        async mounted() {
            this.fetchUsers()
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        text-align: center;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 15px;
    }
</style>