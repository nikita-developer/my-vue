<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">
            <h6>
                {{title}}
            </h6>
            <AppButton 
                color="btn-outline-success" 
                @action="open"
            >{{isNewsOpen ? 'Close' : 'Open'}}</AppButton>
            <AppButton 
                v-if="wasRead"
                color="btn-outline-danger"
                @click="$emit('unmark', id)"
            >Не прочитано</AppButton>
            <div v-if="isNewsOpen">
                <hr/>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor pariatur atque odio exercitationem sapiente magni, accusantium nostrum ut mollitia nisi.</p>
                <AppButton 
                    v-if="!wasRead" 
                    @click="mark" 
                    color="btn-outline-success"
                >Прочесть новость</AppButton>
                <AppNewsList />
            </div>
        </li>
    </ul>
</template>

<script>
    import AppButton from './AppButton.vue'
    import AppNewsList from './AppNewsList.vue'
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true,
            },
            wasRead: {
                type: Boolean,
            },
            isOpen: {
                type: Boolean,
                required: false,
                default: false,
                validator(value) {
                    return value === true || value === false
                }
            },
        },
        emits: {
            openNews: null,
            readNews(id) {
                if(id) {
                    return true
                }
                console.warn('Нет параметра id для emit readNews');
                return false
            },
            unmark: null
        },
        data() {
            return {
                isNewsOpen: this.isOpen,
            }
        },
        methods: {
            open() {
                this.isNewsOpen = !this.isNewsOpen
                if(this.isNewsOpen) {
                    this.$emit('openNews')
                }
            },
            mark() {
                this.isNewsOpen = false
                this.$emit('readNews', this.id)
            },
        },
        components: {AppButton, AppNewsList}
    }
</script>