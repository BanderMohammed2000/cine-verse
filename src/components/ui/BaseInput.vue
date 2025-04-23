<template>
  <input
    :type="type"
    class="form-control mb-4"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    type: String,
    placeholder: String,
    modelValue: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
input:focus {
  border-color: transparent;
  box-shadow: 0 0 0 0.2rem rgba(226, 96, 106, 0.25);
}
</style>
