<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../store/user.js';
import { debounce } from 'lodash';

const { searchUsers } = useUserStore();
const searchQuery = ref('');
</script>

<template>
    <div class="mb-3">
        <label for="search">Search User</label>
        <input class="form-control" type="text" name="search" id="search" placeholder="Search by name"
            v-model="searchQuery">
    </div>
    <div class="mb-3">
        <button type="button" class="btn btn-primary">Search</button>
    </div>
</template>