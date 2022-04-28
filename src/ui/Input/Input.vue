<template>
    <div class="input" :class="className">
        <label class="input__label" :for="id">
            <p>{{title}}</p>
        </label>
        <input 
            :id="id" 
            class="input__field" 
            :type="type"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <small v-if="message" class="input__message">{{message}}</small>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 'input-' + Math.random()
            }
        },
        props: {
            modelValue: String,
            title: {
                type: String,
                default: '',
            },
            message: {
                type: String,
                default: '',
            },
            className: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                default: '',
            },
            value: {
                type: String,
                default: '',
            },
            type: {
                type: String,
                default: 'text',
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import './styles/input'
</style>