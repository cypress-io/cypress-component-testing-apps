<template>
  <div id="app">
    <LoginForm
      v-if="!isAuthed"
      :onLogin="handleLogin"
      :error-message="errorMessage"
    />
    <Welcome v-else :username="username" @logout="handleLogout" />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import Welcome from './components/Welcome.vue';

export default {
  name: 'App',
  components: {
    LoginForm,
    Welcome,
  },
  data() {
    return {
      isAuthed: false,
      errorMessage: '',
      username: '',
    };
  },
  methods: {
    async handleLogin(creds) {
      try {
        this.errorMessage = '';
        const res = await fetch('/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(creds),
        });
        if (res.status === 200) {
          this.isAuthed = true;
          this.username = creds.username;
        } else {
          if (res.status === 401) {
            const { message } = await res.json();
            this.errorMessage = message;
          } else {
            throw Error(`error during auth, status code: ${res.status}`);
          }
        }
      } catch (e) {
        console.error(e);
      }
    },
    handleLogout() {
      this.isAuthed = false;
      this.username = '';
    },
  },
};
</script>
