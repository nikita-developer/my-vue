<template>
	<div class="alert" v-if="alert" :class="alert.type">
		<h3>{{alert.title}}</h3>
		<p>{{alert.text}}</p>
		<button class="btn btn-outline-danger" :class="alert.type" @click="$emit('close')">Закрыть</button>
    </div>
</template>

<script>
	export default {
		emits: ['close'],
		props: ['alert']
	}
</script>

<style scoped>
	.danger {
		color: #dc3545;
	}
	.alert {
		border-left: 5px solid #0d6efd;
		border-left-color: #dc3545;
	}
	.alert.primary {
		border-left-color: #0d6efd;
	}

	.alert.primary .btn {
		color: #0d6efd;
		border-color: #0d6efd;
	}

	.alert.primary .btn:hover {
		color: #fff;
		background-color: #0d6efd;
	}
</style>