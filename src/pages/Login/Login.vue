<template>
    <div class="login-wrap">
        <form @submit.prevent="submit" class="login">
            <div class="login__title">Что-бы продолжить, нужно войти!</div>
            <div class="login__box">
                <div class="login__item">
                    <Label>
                        <Field :value="value" @messChange="value = $event" />
                    </Label>
                </div>
                <p>{{value}}</p>
                <Button text="Отправить"/>
            </div>
        </form>
    </div>
</template>

<script>
    import Field from '../../ui/Field/Field.vue'
    import Label from '../../ui/Label/Label.vue'
    import Button from '../../ui/Button/Button.vue'
    export default {
        data() {
            return {
                value: ''
            }
        },
        components: {
            Label,
            Field,
            Button,
        },
        methods: {
            submit() {
                console.log(123);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>