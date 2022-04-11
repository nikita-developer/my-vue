<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item p-3">
            <h6>
                {{title}}
            </h6>
            <button 
                class="btn btn-outline-success btn-sm pt-2"
                @click="open">
                {{isNewsOpen ? 'Close' : 'Open'}}
            </button>
            <button 
                v-if="wasRead"
                class="btn btn-danger"
                @click="$emit('unmark', id)">
                Не прочитано
            </button>
            <div v-if="isNewsOpen">
                <hr/>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor pariatur atque odio exercitationem sapiente magni, accusantium nostrum ut mollitia nisi.</p>
                <button v-if="!wasRead" @click="mark" class="btn btn-primary">Прочесть новость</button>
            </div>
        </li>
    </ul>
</template>

<script>
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
            // unmark() {
            //     this.$emit('unmark', this.id)
            // }
        }
    }
</script>