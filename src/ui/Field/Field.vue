<template>
    <input class="field" type="text" :placeholder="placeholder">
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: 'Заполните поле',
            },
            value: {
                type: String,
                default: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './styles/field'
</style>