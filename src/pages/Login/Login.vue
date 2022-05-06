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
            }
        },
        methods: {
            submit() {
                if(this.formIsValid()) {
                    let formData = new FormData()
                    formData.append('login', this.login.value)
                    formData.append('password', this.password.value)

                    this.login.value = null
                    this.login.message = null
                    this.password.value = null
                    this.password.message = null

                    this.setAuth(formData)

                    // this.$store.commit('auth')
                    // this.$router.push('/')
                    // localStorage.setItem('cdek-auth', true)


                    
                    // for (var pair of formData.entries()) {
                    //     console.log(pair[0]+ ', '+ pair[1]); 
                    // }
                }
            },
            formIsValid() {
                let isValid = true
                if(!this.login.value) {
                    this.login.message = 'Логин не может быть пустым'
                    isValid = false
                }

                if(!this.password.value) {
                    this.password.message = 'Пароль не может быть пустым'
                    isValid = false
                } else if(this.password.value.length < 8) {
                    this.password.message = 'Пароль не может быть меньше 8'
                    isValid = false
                }
                return isValid
            },

            async setAuth(formData) {
                const fetchResp = await fetch('http://spasdeveloper.ru/cdek/php/auth/auth.php', {
                    method: 'POST',
                    body: {login: '111111111'},
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const json = await fetchResp.json();
                console.log(json.message)
            }


            // method: 'POST',
            // url: 'http://spasdeveloper.ru/my-app/php/authorization/authorization.php',
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            // data: {
            //     login: login,
            //     password: password,
            // }
        },
    }
</script>

<style lang="scss" scoped>
    @import './styles/login'
</style>