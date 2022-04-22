<template>
  <div class="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
    <h1 class="text-2xl">Welcome {{ username }}!</h1>
    <Button class="mt-2" @click="$emit('logout')">Log Out</Button>
  </div>
</template>

<script setup lang="ts">
import Button from './CyButton.vue';

defineProps({
  username: String,
});

defineEmits<{
  (e: 'logout'): void;
}>();
</script>

<style></style>
