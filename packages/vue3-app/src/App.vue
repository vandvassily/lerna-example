<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import VueButton from "@vassily/h5-components/lib/button.vue";
console.log(VueButton);

// const click = () => {
//   console.log('click')
// }
export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    HelloWorld,
    VueButton,
  },
  methods: {
    onClick() {
      this.count = this.count + 1;
      console.log("click2");
    },
  },
};
</script>

<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <VueButton @click-event="onClick">测试点击{{count}}</VueButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
