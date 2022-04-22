<template>
    <div class="login">
        <button @click="logins">sdf</button>
    </div>
</template>

<script>
    export default {
        inject: ['login'],
        methods: {
            logins() {
                this.login()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './styles/login.scss'
</style>