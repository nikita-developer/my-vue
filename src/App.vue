<template>
	<div class="page">
		<Header />
		<Main />
		<Footer />
	</div>
</template>

<script>
	import Header from './components/Header/Header.vue'
	import Main from './components/Main/Main.vue'
	import Footer from './components/Footer/Footer.vue'
	export default {
		components: {
			Header,
			Main,
			Footer,
		},
	}
</script>

<style></style>