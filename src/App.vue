<template>
	<div class="container">
		<div class="card p-2">
			<h4>Актуальные новости <strong style="font-size: 14px">{{now}}</strong></h4>
			<span>Открыто: {{openRate}} | Прочитано: {{readRate}}</span>
		</div>
	</div>
	<AppNews 
		v-for="item in news"
		:key="item.id"
		:title="item.title"
		:id="item.id"
		:isOpen="item.isOpen"
		:wasRead="item.wasRead"
		@openNews="openNews"
		@readNews="readNews"
		@unmark="unreadNews"
	/>
</template>

<script>
	import AppNews from './components/AppNews.vue'
	export default {
		data() {
			return {
				now: new Date().toLocaleDateString(),
				isOpen: false,
				openRate: 0,
				readRate: 0,
				news: [
					{
						title: 'Джо Байден победил на выборах в США',
						id: 1,
						isOpen: false,
						wasRead: false,
					},
					{
						title: 'Vue 3 работает!',
						id: 2,
						isOpen: false,
						wasRead: false,
					},
				]
			}
		},
		components: {
			AppNews,
		},
		methods: {
			openNews() {
				this.openRate++
			},
			readNews(id) {
				const index = this.news.findIndex(news => news.id === id)
				this.news[index].wasRead = true
				this.readRate++
			},
			unreadNews(id) {
				const news = this.news.find(news => news.id === id)
				news.wasRead = false
				this.readRate--
			}
		}
	}
</script>

<style>

</style>