<template>
  <div>
    <HeaderNav />
    <Nuxt />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderNav from "../components/header-nav.component.vue";

@Component({
  components: { HeaderNav }
})
export default class Default extends Vue {}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: #f7f7f7
} 

.header {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  padding-top: 25px;
  margin: 0 auto;
  max-width: 70%;
}

.header-item {
  padding: 10px 15px;
  font-size: 12px;
  border-radius: 5px;
  font-family: "Sans Sarif"
}

.header-item:hover {
  color: #b7523f;
  text-decoration: underline;
}

.divider {
  margin: 0 auto;
  max-width: 80%;
}
</style>
