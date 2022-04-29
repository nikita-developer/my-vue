<template>
    <button 
        class="button" 
        :class="myClass"
        @click="$emit('buttonClick')"
    >{{text}}</button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: 'Кнопка',
            },
            myClass: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style lang="scss">
    @import './styles/button'
</style>