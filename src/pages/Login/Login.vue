<template>
    <div class="login-wrap">
        <form @submit.prevent="submit" class="login">
            <div class="login__title">Что-бы продолжить, нужно войти!</div>
            <div class="login__box">
                <Input
                    title="Логин"
                    :message="login.message"
                    :className="login.className"
                    v-model="login.value"
                />
                <Input
                    type="password"
                    title="Пароль"
                    :message="password.message"
                    :className="password.className"
                    v-model="password.value"
                />
                <Button class="login__btn" text="Отправить"/>
            </div>
        </form>
    </div>
</template>

<script>
    import Input from '../../ui/Input/Input.vue'
    import Button from '../../ui/Button/Button.vue'

    export default {
        data() {
            return {
                login: {
                    value: null,
                    message: null,
                    className: null,
                },
                password: {
                    value: null,
                    message: null,
                    className: null,
                },
            }
        },
        methods: {
            submit() {
                if(this.formIsValid()) {
                    console.log(this.$store.getters.allLogin);
                }
            },
            formIsValid() {
                let isValid = true

                // проверка логина
                if(!this.login.value) {
                    this.login.message = 'Логин не может быть пустым'
                    this.login.className = 'error'
                    isValid = false
                } else {
                    this.login.message = null
                    this.login.className = null
                }

                // проверка пароля
                if(!this.password.value) {
                    this.password.message = 'Пароль не может быть пустым'
                    this.password.className = 'error'
                    isValid = false
                } else {
                    this.password.message = null
                    this.password.className = null
                }
                
                return isValid
            }
        },
        components: {
            Input,
            Button,
        },
    }
</script>

<style lang="scss" scoped>
    @import './styles/login'
</style>