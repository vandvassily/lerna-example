<template>
  <div class="about">
    <h1>This is an about page</h1>
    <vue-button @click="onClick"> 测试按钮 </vue-button>
  </div>
</template>

<script>
import VueButton from "@vassily/h5-components/lib/button";
export default {
  components: {
    VueButton,
  },
  methods: {
    onClick() {
      console.log("click from children");
    },
  },
};
</script>
