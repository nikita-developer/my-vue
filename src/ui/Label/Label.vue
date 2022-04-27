<template>
    <label class="label">
        <span class="label__text">{{text}}</span>
        <slot></slot>
        <div class="label__error">{{error}}</div>
    </label>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: 'Заполните поле',
            },
            error: {
                type: String,
                default: 'Ошибка',
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import './styles/label'
</style>