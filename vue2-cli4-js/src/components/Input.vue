<template>
  <input
    class="p-2 text-gray-500 focus:outline-none border-2"
    :value="model"
    @input="handleChange"
  />
</template>

<script>
export default {
  props: {
    model: String,
  },
  methods: {
    handleChange(event) {
      this.$emit('input', event.target.value)
    }
  }
};
</script>
