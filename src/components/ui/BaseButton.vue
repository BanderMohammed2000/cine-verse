<template>
  <button :class="['btn', mode]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: { mode: { type: String, required: false, default: null } },
};
</script>

<style scoped>
button {
  color: #ffffff;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  transition: all 0.3s ease-in;
}

button:hover {
  background-color: #d1535e;
  color: #ffffff;
}

button.outline {
  font-weight: normal;
  padding: 0;
  border: none;
}

button.outline:hover {
  background-color: transparent;
}

button.outline:focus {
  box-shadow: none;
  outline: none;
  border: none;
}

button.outline:active {
  background-color: transparent;
  border: none;
  color: #ffffff;
}
</style>
