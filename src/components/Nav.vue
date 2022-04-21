<template>
    <nav class="nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contacts">Contacts</router-link>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .active {
        color: red;
    }
</style>