<template>
    <div class="header">
        <Logo />
        <Nav />
    </div>
</template>

<script>
    import Logo from '../Logo/Logo.vue'
    import Nav from '../Nav/Nav.vue'
    export default {
        components: {
            Logo,
            Nav,
        }
    }
</script>

<style lang="scss" scoped>
    @import './styles/header'
</style>