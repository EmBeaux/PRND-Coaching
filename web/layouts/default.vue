<template>
  <div>
    <HeaderNav />
    <Nuxt />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderNav from "../components/global/header-nav.component.vue";

@Component({
  components: { HeaderNav }
})
export default class Default extends Vue {}
</script>

<style>
html {
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: #FAF9F6;
  height: 1500px;
} 
</style>
