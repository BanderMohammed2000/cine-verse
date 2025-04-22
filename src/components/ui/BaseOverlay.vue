<template>
  <teleport to="body">
    <div class="overlay" @click="close"></div>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],
  mounted() {
    this.hiddenScrollBody();
  },
  methods: {
    close() {
      this.$emit("close");
    },
    hiddenScrollBody() {
      document.body.style.overflow = "hidden";
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
</style>
