<template>
  <div class="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
    <form @submit.prevent="handleFormSubmit" class="flex flex-col">
      <fieldset>
        <legend class="text-3xl text-gray-800 mb-4">{{ title }}</legend>
        <InputField
          name="username"
          type="text"
          label="Username"
          :submitted="submitted"
          requiredMessage="Username is required"
          auto-complete="username"
          v-model:value="username"
        ></InputField>
        <InputField
          name="password"
          type="password"
          label="Password"
          :submitted="submitted"
          requiredMessage="Password is required"
          auto-complete="current-password"
          v-model:value="password"
        ></InputField>
        <Button type="submit">Login</Button>
        <div class="text-red-500 mt-2">
          {{ errorMessage }}
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Button from './CyButton.vue';
import InputField from './InputField.vue';

const props = defineProps<{
  title?: string;
  errorMessage?: string;
}>();

const emits = defineEmits<{
  (e: 'login', creds: { username: string; password: string }): void;
}>();

const title = computed(() => props.title || 'Log In');
const username = ref('');
const password = ref('');
const submitted = ref(false);

const handleFormSubmit = () => {
  if (username.value && password.value) {
    emits('login', { username: username.value, password: password.value });
  }
  submitted.value = true;
};
</script>
