<template>
	<div v-if="!people.length">
		<h6>Людей пока нет</h6>
		<button 
			class="btn btn-outline-success"
			@click="$emit('load')"
		>
			Загрузить список
		</button>
	</div>
	<div v-else>
		<ul class="list-group list-group-flush">
			<li 
				class="list-group-item d-flex justify-content-between align-items-center"
				v-for="person in people"
				:key="person.id"
			>
				{{person.firstName}}
				<button 
					class="btn btn-outline-danger btn-sm"
					@click="$emit('remove', person.id)"
				>
					Удалить
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		emits: ['load', 'remove'],
		props: ['people']
	}
</script>

<style scoped>

</style>