<template>
    <div>
        <input 
            class="field" 
            type="text" 
            :placeholder="placeholder"
            :value="value"
            @input="(e) => this.$emit('onValue', e.target.value)"
        >
    </div>
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
                default: 'Просто текст',
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import './styles/field'
</style>