<script setup>
import { defineProps, ref, watch } from 'vue';
import { useUserStore } from '../../store/user.js';


const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});

const closeButton = ref();

const userFormData = ref({ ...props.user });
const { modifyUser } = useUserStore();

watch(
  () => props.user,
  (newUser) => {
    userFormData.value = { ...newUser };
  }
);

async function handleSaveButtonClick() {
  try {
    await modifyUser(userFormData.value);
    closeButton.value.click();
  } catch (error) {
    alert(error.message);
  }
}

</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="editUserModal"
    tabindex="-1"
    aria-labelledby="editUserModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fs-5" id="editUserModalLabel">Edit user</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="mb3">
              <label for="firstname">First name</label>
              <input class="form-control" type="text" name="firstname" id="firstname" required v-model="userFormData.firstName">
            </div>

            <div class="mb3">
              <label for="lastname">Last name</label>
              <input class="form-control" type="text" name="lastname" id="lastname" required v-model="userFormData.lastName">
            </div>

            <div class="mb3">
              <label for="emailAdress">E-mail</label>
              <input class="form-control" type="emailAdress" name="emailAdress" id="emailAdress" required v-model="userFormData.email">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button ref="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="handleSaveButtonClick">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
