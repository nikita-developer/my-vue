<template>
    <nav class="nav navbar navbar-expand-md navbar-dark bg-primary">
        <Logo class="navbar-brand" />
        <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav" v-if="this.$store.getters.AUTH">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Главная</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import Logo from '../Logo/Logo.vue'
    export default {
        components: {
            Logo
        }
    }
</script>

<style lang="scss" scoped>
    @import './styles/nav'
</style>