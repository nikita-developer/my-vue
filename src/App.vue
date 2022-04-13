<template>
	<div class="container">
		<div class="page">
			<div class="summary">
				<div class="aside">
					<form @submit.prevent="submit">
						<div class="form-group mb-2">
							<label for="exampleFormControlSelect1"><small>Тип блока</small></label>
							<select 
								class="form-control" 
								id="exampleFormControlSelect1"
								v-model="selectType">
								<option value="Заголовок">Заголовок</option>
								<option value="Подзаголовок">Подзаголовок</option>
								<option value="Аватар">Аватар</option>
								<option value="Текст">Текст</option>
							</select>
						</div>
						<div class="form-group mb-2">
							<label for="exampleFormControlTextarea1"><small>Значение блока</small></label>
							<textarea 
								class="form-control" 
								id="exampleFormControlTextarea1" rows="3"
								v-model="textareaType"></textarea>
						</div>
						<button class="btn btn-primary btn-sm w-100">Добавить</button>
					</form>
				</div>
				<div class="main">
					<AppSummary :title="summary" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AppSummary from './AppSummary.vue'
	export default {
		data() {
			return {
				selectType: 'Заголовок',
				textareaType: '',
				summary: [],
			}
		},
		methods: {
			submit() {
				this.summary.push({
					thems: this.selectType,
					content: this.textareaType,
				})
			}
		},
		components: {
			AppSummary
		}
	}
</script>

<style>
	body {
		background-color: #4d3256 !important;
	}

	.summary {
		display: flex;
		flex-wrap: wrap;
	}

	.aside {
		flex: 0 0 200px;
		padding: 15px;
		background-color: #fff;
		border-radius: 10px;
		margin-right: 15px;
	}

	.main {
		flex-grow: 1;
		padding: 15px;
		background-color: #fff;
		border-radius: 10px;
	}
</style>