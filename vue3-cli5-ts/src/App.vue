<template>
  <LoginForm
    v-if="!isAuthed"
    @login="handleLogin"
    :error-message="errorMessage"
  />
  <Welcome v-else :username="username" @logout="handleLogout" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from './components/LoginForm.vue';
import Welcome from './components/Welcome.vue';

const isAuthed = ref(false);
const errorMessage = ref('');
const username = ref('');

const handleLogin = async (creds: { username: string; password: string }) => {
  try {
    errorMessage.value = '';
    const res = await fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(creds),
    });
    if (res.status === 200) {
      isAuthed.value = true;
      username.value = creds.username;
    } else {
      if (res.status === 401) {
        const { message } = await res.json();
        errorMessage.value = message;
      } else {
        throw Error(`error during auth, status code: ${res.status}`);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

const handleLogout = () => {
  isAuthed.value = false;
  username.value = '';
};
</script>
