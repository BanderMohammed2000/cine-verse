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
  transition: all 0.3s linear;
}

button:not(.outline):hover,
button:not(.outline):active {
  background-color: #b93c47 !important;
  color: #ffffff !important;
  box-shadow: none;
  border-color: transparent !important;
}

button:not(.outline):focus {
  background-color: #e2606a;
  box-shadow: none;
  color: #ffffff !important;
}

button.outline {
  font-weight: normal;
  padding: 0;
  border: none;
  border-radius: 0;
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
