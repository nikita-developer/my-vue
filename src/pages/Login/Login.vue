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
            <div v-if="info" class="form-group mb-3"><small class="form-text text-danger">{{info}}</small></div>
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
                info: null,
            }
        },
        methods: {
            async submit() {
                if(this.formIsValid() && await this.setAuth(this.login.value, this.password.value)) {
                    let cdek_token = await this.setAuth(this.login.value, this.password.value)

                    this.login.value = null
                    this.login.message = null
                    this.password.value = null
                    this.password.message = null
                    this.info = null

                    this.$store.commit('auth')
                    this.$router.push('/')
                    localStorage.setItem('cdek-auth', cdek_token)
                } else {
                    this.info = 'Нет такого логина или пароля'
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

            async setAuth(login, password) {
                let response = await fetch('http://spasdeveloper.ru/cdek/php/auth/auth.php', {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            login: login,
                            password: password
                        }
                    ),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                let result = await response.json()
                return result
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import './styles/login'
</style>