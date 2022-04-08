
const App = new Vue({
    el: '#app',
    data: {
        name: '',
        nameError: false,
        description: '',
        descriptionError: false,
        cards: [
            {
                img: 'http://dummyimage.com/300x150/c0c0c0',
                title: 'nikita',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo!',
            },
            {
                img: 'http://dummyimage.com/300x150/c0c0c0',
                title: 'dima',
                description: 'Lorem ipsum dolor!',
            },
            {
                img: 'http://dummyimage.com/300x150/c0c0c0',
                title: 'maks',
                description: 'Lorem ipsum dolor, sit amet consectetur.',
            },
            {
                img: 'http://dummyimage.com/300x150/c0c0c0',
                title: 'kristina',
                description: 'Lorem ipsum!',
            },
        ]
    },
    methods: {
        addCard() {
            if(this.name !== '' && this.description !== '') {
                this.cards.push({
                    img: 'http://dummyimage.com/300x150/c0c0c0',
                    title: this.name,
                    description: this.description,
                })
                this.name = ''
                this.nameError = false
                this.description = ''
                this.descriptionError = false
            } else {
                this.name === '' ? this.nameError = true : this.nameError = false
                this.description === '' ? this.descriptionError = true : this.descriptionError = false
            }
        },
        removeCard(index) {
            this.cards.splice(index, 1)
        }
    }
    // data: {
    //     title: 'Список заметок',
    //     placeholder: 'Введите название заметки',
    //     inputValue: '',
    //     notes: ['Заметка', 'Заметка', 'Заметка'],
    // },
    // methods: {
    //     addNewNout() {
    //         if(this.inputValue !== '') {
    //             this.notes.push(this.inputValue)
    //             this.inputValue = ''
    //         }
    //     },
    //     removeNout(index) {
    //         this.notes.splice(index, 1)
    //     },
    //     toUpperCase(item) {
    //         return item.toUpperCase()
    //     },
    // },
    // computed: {
    //     doubleCountComputed() {
    //         return this.notes.length * 2
    //     }
    // },
    // watch: {
    //     inputValue(value) {
    //         if(value.length > 10) {
    //             this.inputValue = ''
    //         }
    //     }
    // }
})
