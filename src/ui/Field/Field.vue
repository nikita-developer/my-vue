<template>
    <div>
        <input 
            class="field" 
            type="text" 
            :placeholder="placeholder"
            :value="value"
            @input="changeValue"
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
        methods: {
            changeValue(e) {
                this.text = e.target.value
                this.$emit('messChange', this.text)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './styles/field'
</style>