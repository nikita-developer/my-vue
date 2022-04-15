
<template>
    <div class="commits">
        <div v-for="commit in commits" :key="commit">
            <h6>{{commit.name}}</h6>
            <p>{{commit.commit}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['commits'],
    }
</script>

<style scoped>
    .commits {
		background-color: #fff;
		border-radius: 10px;
		padding: 15px;
        margin-top: 15px;
	}
</style>