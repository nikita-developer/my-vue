<template>
	<div class="container">
		<AppAlert :alert="alert" @close="alert = null"/>
		<div class="card p-2 mb-3">
			<h6>Работа с базой данных</h6>
			<form 
				class="form-group"
				@submit.prevent="createPerson"
			>
				<div class="form-group pb-3">
					<label for="exampleFormControlInput1"><small>Введите имя</small></label>
					<input 
						type="name" 
						class="form-control" 
						id="exampleFormControlInput1"
						v-model.trim="name"
					>
				</div>
				<button class="btn btn-primary" :disabled="name.length === 0">Создать человека</button>
			</form>
		</div>
		<AppPeopleList
			:people="people"
			@load="loadPeople"
			@remove="removePerson"
		/>
	</div>
</template>

<script>
	import AppPeopleList from './components/AppPeopleList.vue'
	import AppAlert from './components/AppAlert.vue'
	import axios from 'axios'

	export default {
		data() {
			return {
				name: '',
				people: [],
				alert: null,
			}
		},
		mounted() {
			this.loadPeople()
		},
		methods: {
			async createPerson() {
				const response = await fetch('https://vue-with-http-30bc6-default-rtdb.firebaseio.com/people.json', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						firstName: this.name,
					})
				})

				const firebaseData = await response.json()

				this.people.push({
					firstName: this.name,
					id: firebaseData.name
				})
				this.name = ''
			},
			async loadPeople() {
				try {
					const {data} = await axios.get('https://vue-with-http-30bc6-default-rtdb.firebaseio.com/people.json')
					if(!data) {
						throw new Error('Список людей пуст')
					}
					this.people = Object.keys(data).map(key => {
						return {
							id: key,
							...data[key]
						}
					})
				} catch (e) {
					this.alert = {
						type: 'danger',
						title: 'Ошибка',
						text: e.message,
					}
					console.log(e.message);
				}
				
			},
			async removePerson(id) {
				await axios.delete(`https://vue-with-http-30bc6-default-rtdb.firebaseio.com/people/${id}.json`)
				this.people = this.people.filter(person => person.id !== id)
			}
		},
		components: {
			AppPeopleList,
			AppAlert
		}
	}
</script>

<style>

</style>