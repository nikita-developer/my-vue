<template>
    <nav class="nav bg-primary">
        <Logo class="logo" />
        <ul class="nav__list">
            <li class="nav__item" v-if="this.$store.getters.AUTH">
                <router-link class="nav__link" to="/">Главная</router-link>
            </li>
            <li class="nav__item" v-if="this.$store.getters.AUTH">
                <router-link class="nav__link" to="/job">График дежурств</router-link>
            </li>
            <li class="nav__item">
                <router-link class="nav__link" to="/about">О нас</router-link>
            </li>
            <li class="nav__item" v-if="!this.$store.getters.AUTH">
                <router-link class="nav__link" to="/login">Войти</router-link>
            </li>
            <li @click="logOut" class="nav__item" v-if="this.$store.getters.AUTH">
                <router-link class="nav__link" to="/login">Выйти</router-link>
            </li>
        </ul>
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