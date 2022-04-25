<template>
    <div class="home">
        <!-- <PostsAdd />
        <h1>{{postsCount}}</h1>
        <div class="user" v-for="post in validPosts" :key="post.id">
            <strong class="user__id">{{post.userId}}</strong>
            <hr>
            <h4 class="user__title">{{post.title}}</h4>
            <hr>
            <div class="user__body">{{post.body}}</div>
        </div> -->
        <Users />
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import PostsAdd from '../../components/Posts/PostsAdd.vue'
    import Users from '../../components/Users/Users.vue'
    export default {
        computed: mapGetters(['validPosts', 'postsCount']),
        methods: mapActions(['fetchPosts']),
        async mounted() {
            this.fetchPosts()
        },
        components: {
            PostsAdd,
            Users,
        }
    }
</script>

<style lang="scss" scoped>
    .user {
        padding: 15px 30px;
        margin: 15px;
        border: 1px solid #ccc;
        text-align: center;
    }
</style>