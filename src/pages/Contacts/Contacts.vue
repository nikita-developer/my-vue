<template>
    <div class="contacts">
        <router-link to="/home">
            <button>На главную</button>
        </router-link>
        <Cards />
    </div>
</template>

<script>
    import Cards from '../../components/Cards/Card.vue'
    export default {
        components: {
            Cards,
        }
    }
</script>

<style lang="scss" scoped>
    
</style>