<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <img :src="`guitars/${title}.jpg`" :alt="title" class="guitar-image"/>
</template>

<style scoped>
.guitar-image {
    height: 15rem;
}
</style>