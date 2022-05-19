<template>
    <div class="job main-aside">
        <Aside>
            <template #content>
                <div class="job__nav">
                    <div class="job__nav-item">
                        <router-link class="job__nav-link" to="/job">График работы</router-link>
                    </div>
                    <div class="job__nav-item">
                        <router-link class="job__nav-link" to="/job/report-job">Отчеты</router-link>
                    </div>
                </div>
            </template>
        </Aside>
        <div class="job__body">
            <router-view></router-view>
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