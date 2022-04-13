<template>
	<div>
		<form @submit.prevent="submit">
			<div class="form-row">
				<div class="col-md-4 mb-3">
					<label for="validationServer01">First name</label>
					<input 
						name="name" 
						type="text" 
						class="form-control"
						:class="{'is-invalid': !errors.name, 'is-valid': errors.name}" 
						id="validationServer01" 
						placeholder="First name"
						v-model="name"
					>
					<div v-if="errors.name" class="valid-feedback">{{errors.name}}</div>
				</div>
			</div>
			<div class="form-group">
				<div class="form-check">
					<input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
					<label class="form-check-label" for="invalidCheck3">
						Agree to terms and conditions
					</label>
					<div class="invalid-feedback">
						You must agree before submitting.
					</div>
				</div>
			</div>
			<button class="btn btn-primary">Submit form</button>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				errors: {
					name: null,
				}
			}
		},
		methods: {
			submit() {
				if(this.valid()) {
					console.log('24');
				}
			},
			valid() {
				let isValid = true
				if(this.name !== '') {
					isValid = false
					this.errors.name = 'Введите имя'
				} else {
					this.errors.name = null
				}
				return isValid
			}
		}
	}
</script>

<style>
	small {
		color: red;
	}

	select,
	input,
	button {
		width: 100%;
	}

	.error {
		border: 1px solid red;
	}
</style>