<template>
    <div v-if="!summary.length">Добавьте первый блок, чтобы увидеть результат</div>
    <div v-for="item in summary" :key="item">
        <h4 v-if="item.thems === 'Заголовок'">{{item.content}}</h4>
        <h6 v-if="item.thems === 'Подзаголовок'">{{item.content}}</h6>
        <div v-if="item.thems === 'Аватар'">
            <img :src="item.content" alt="Аватар">
        </div>
        <p v-if="item.thems === 'Текст'">{{item.content}}</p>
    </div>
</template>

<script>
    export default {
        props: ['summary'],
    }
</script>