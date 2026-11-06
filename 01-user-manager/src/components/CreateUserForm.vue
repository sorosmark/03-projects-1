<script setup>
import { ref, reactive } from 'vue';
import { useUserStore } from '../../store/user.js';

const { addUser } = useUserStore();
const isFormVisible = ref(false);
const createUserForm = ref();

const userFormDataInitialState = {
  firstname: '',
  lastname: '',
  emailAdress: ''
};
const userFormData = reactive({ ...userFormDataInitialState });

function showForm() {
  isFormVisible.value = true;
}

async function handleSaveClick() {
  try {
    if (createUserForm.value.checkVaéidity) {
      await addUser(userFormData);
      Object.assign(userFormData, userFormDataInitialState);
      isFormVisible.value = false;
    }
  } catch (error) {
    alert(error);
  }
}

function handleCancelClick() {
  isFormVisible.value = false;
}
</script>

<template>
  <button class="btn btn-primary mb-3" @click="showForm">Create User</button>
  <form v-show="isFormVisible" ref="createUserForm" action="">
    <div class="mb3">
      <label for="firstname">First name</label>
      <input class="form-control" type="text" name="firstname" id="firstname" required>
    </div>

    <div class="mb3">
      <label for="lastname">Last name</label>
      <input class="form-control" type="text" name="lastname" id="lastname" v-model="userFormData.lastname" required>
    </div>

    <div class="mb3">
      <label for="emailAdress">E-mail</label>
      <input class="form-control" type="email" name="emailAdress" id="emailAdress" required>
    </div>
    
    <div class="mb-3">
      <button type="button" class="btn btn-primary" @click="handleSaveClick">Save</button>
      <button type="button" class="btn btn-secondary" @click="handleCancelClick">Cancel</button>
    </div>
  </form>
</template>