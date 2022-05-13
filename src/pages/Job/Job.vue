<template>
    <div class="job main-aside">
        <Aside></Aside>
        <div class="job__body">
            <h1>Работа</h1>
        </div>
    </div>
</template>

<script>
    import Aside from '../../components/Aside/Aside.vue'
    export default {
        components: {
            Aside,
        }
    }
</script>

<style lang="scss" scoped>
    @import './styles/job.scss';
</style>