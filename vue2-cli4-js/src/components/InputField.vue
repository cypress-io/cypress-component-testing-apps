<template>
  <label class="flex flex-col text-lg text-gray-800 mb-2">
    {{ label }}:
    <input
      v-bind="$attrs"
      class="p-2 text-gray-500 focus:outline-none border-2"
      :value="value"
      @input="handleChange"
    />
    <span class="text-red-500 mt-2" v-if="submitted && !value">{{
      requiredMessage
    }}</span>
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    submitted: Boolean,
    requiredMessage: String,
    value: String,
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
