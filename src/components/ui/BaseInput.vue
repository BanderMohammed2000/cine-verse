<template>
  <input :type="type" class="form-control mb-4" :placeholder="placeholder" />
</template>
<script>
export default {
  props: {
    type: String,
    placeholder: String,
  },
};
</script>

<style scoped>
input:focus {
  border-color: transparent;
  box-shadow: 0 0 0 0.2rem rgba(226, 96, 106, 0.25);
}
</style>
