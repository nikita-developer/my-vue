<template>
    <div class="login-wrap">
        <form @submit.prevent="submit" class="form login">
            <h3 class="form__title mb-3">Войти в систему</h3>
            <div class="form-group mb-2">
                <label for="" class="text-muted">Логин</label>
                <input v-model.trim="login.value" type="text" class="form-control" placeholder="Введите логин">
                <small class="form-text text-danger">{{login.message}}</small>
            </div>
            <div class="form-group mb-3">
                <label for="" class="text-muted">Пароль</label>
                <input v-model.trim="password.value" type="password" class="form-control" placeholder="Введите пароль">
                <small class="form-text text-danger">{{password.message}}</small>
            </div>
            <div v-if="error" class="form-group mb-3"><small class="form-text text-danger">{{error}}</small></div>
            <button class="btn btn-primary w-100">Войти</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login: {
                    value: null,
                    message: null,
                },
                password: {
                    value: null,
                    message: null,
                },
                error: null
            }
        },
        methods: {
            async submit() {
                if(this.formIsValid()) {
                    let response = await fetch('http://spasdeveloper.ru/cdek/php/auth/auth.php', {
                        method: 'POST',
                        body: JSON.stringify(
                            {
                                login: this.login.value,
                                password: this.password.value
                            }
                        ),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    let data = await response.text()
                    if(data) {
                        this.error = null
                        this.$store.dispatch('GET_TOKEN', data)
                        this.$store.dispatch('GET_AUTH', true)
                        localStorage.setItem('cdek-auth', this.$store.getters.TOKEN)
                        this.$router.push('/')

                        this.login.value = null
                        this.login.message = null
                        this.password.value = null
                        this.password.message = null
                    } else {
                        this.error = 'Нет такого логина или пароля'
                    }
                }
            },
            formIsValid() {
                let isValid = true
                if(!this.login.value) {
                    this.login.message = 'Логин не может быть пустым'
                    isValid = false
                } else {
                    this.login.message = null
                }

                if(!this.password.value) {
                    this.password.message = 'Пароль не может быть пустым'
                    isValid = false
                } else if(this.password.value.length < 8) {
                    this.password.message = 'Пароль не может быть меньше 8'
                    isValid = false
                } else {
                    this.password.message = null
                }

                return isValid
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import './styles/login'
</style>