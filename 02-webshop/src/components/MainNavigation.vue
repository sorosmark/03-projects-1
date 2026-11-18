<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav">
        <ul>
            <li>
                <!-- <a href="/">Guitars</a> -->
                <router-link :to="{ name: 'guitarsList' }">Guitars</router-link>
            </li>
            <li>
                <!-- <a href="/">Guitars</a> -->
                <router-link :to="{ name: 'cart' }">cart</router-link>
            </li>
        </ul>
    </nav>
</template>


<style scoped>
.nav {
    background-color: var(--dark);
    color: var(--light);
    padding: 1rem;
}
</style>