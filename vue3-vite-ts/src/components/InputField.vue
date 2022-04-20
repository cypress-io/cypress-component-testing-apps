<template>
  <label class="flex flex-col text-lg text-gray-800 mb-2">
    {{ label }}:
    <input
      v-bind="$attrs"
      class="p-2 text-gray-500 focus:outline-none border-2"
      :value="value"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    />
    <span class="text-red-500 mt-2" v-if="submitted && !value">{{
      requiredMessage
    }}</span>
  </label>
</template>

<script setup lang="ts">

defineProps({
  label: String,
  submitted: Boolean,
  requiredMessage: String,
  value: String,
});

defineEmits(['update:value']);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style></style>
