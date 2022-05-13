<template>
    <nav class="nav navbar navbar-expand-md navbar-dark bg-primary">
        <Logo class="navbar-brand" />
        <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item active" v-if="this.$store.getters.AUTH">
                    <router-link class="nav-link" to="/">Главная</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/about">О нас</router-link>
                </li>
                <li class="nav-item active" v-if="!this.$store.getters.AUTH">
                    <router-link class="nav-link" to="/login">Войти</router-link>
                </li>
                <li @click="logOut" class="nav-item active" v-if="this.$store.getters.AUTH">
                    <router-link class="nav-link" to="/login">Выйти</router-link>
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
        },
        methods: {
            logOut() {
                this.$store.dispatch('GET_TOKEN', '')
                this.$store.dispatch('GET_AUTH', false)
                localStorage.removeItem('cdek-auth');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './styles/nav'
</style>