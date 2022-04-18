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
          v-model="username"
        ></InputField>
        <InputField
          name="password"
          type="password"
          label="Password"
          :submitted="submitted"
          requiredMessage="Password is required"
          auto-complete="current-password"
          v-model="password"
        ></InputField>
      <Button type="submit">Login</Button>
      <div class="text-red-500 mt-2">
          {{ errorMessage }}
        </div>
    </fieldset>
  </form>
  </div>
</template>

<script>
import InputField from './InputField.vue';
import Button from './Button.vue';

export default {
  components: {
    InputField,
    Button
  },
  props: {
    title: {
      type: String,
      default: 'Log In',
    },
    errorMessage: String,
    onLogin: Function,
  },
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
    };
  },
  methods: {
    handleFormSubmit() {
      if (this.username && this.password) {
        this.onLogin({ username: this.username, password: this.password });
      }
      this.submitted = true;
    },
  },
  // name: 'LoginForm',
  // props: {
  //   title: String,
  //   onLogin: Function,
  // },
  // setup(props) {
  //   const title = computed(() => props.title || 'Log In');
  //   const username = ref('');
  //   const password = ref('');
  //   const submitted = ref(false);
  //   const formSubmit = () => {
  //     if (username.value && password.value) {
  //       props.onLogin({ username: username.value, password: password.value });
  //     }
  //     submitted.value = true;
  //   };
  //   return { formSubmit, title, username, password, submitted };
  // },
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-form fieldset,
.login-form label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.login-form fieldset {
  border: 1px solid lightgray;
  padding: 10px 80px;
}
.login-form input,
.login-form button {
  margin: 4px 0;
}
.login-form .error {
  margin: -2px 0 4px 0;
  color: red;
}
</style>
