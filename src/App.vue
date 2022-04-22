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
		data() {
			return {
				isAuth: false
			}
		},

		methods: {
			login() {
				this.isAuth = true
				this.$router.push('/home')
				console.log(123)
			},
			logout() {
				this.isAuth = false
				this.$router.push('/login')
			},
		},
		components: {
			Header,
			Main,
			Footer,
		},
		provide() {
			return {
				login: this.login,
				logout: this.logout,
			}
		},
	}
</script>

<style>
</style>