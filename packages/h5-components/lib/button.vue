<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "vue-button",
  methods: {
    onClick() {
      this.$emit("click-event");
    },
  },
};
</script>
