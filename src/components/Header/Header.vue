<template>
    <div class="header">
        <Nav />
    </div>
</template>

<script>
    import Nav from '../Nav/Nav.vue'
    export default {
        components: {
            Nav,
        }
    }
</script>

<style lang="scss" scoped>
    @import './styles/header'
</style>