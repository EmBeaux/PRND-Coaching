<template>
  <div class="content fv-padding">
    <div class="fv-margin-bottom fv-hidden-xs fv-hidden-sm" />
    <div class="content__header fv-margin-bottom fv-padding">
      <h1 class="fv-margin-bottom fv-text-center">
        Blog
      </h1>
      <p>
        Hello World
      </p>
    </div>
    <div class="content__body fv-border fv-radius fv-shadow">
      <label class="fv-control-label fv-padding"> <i class="material-icons">person_add</i>Hello World</label>
      <div class="fv-padding container">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class HomeIndex extends Vue {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
.content {
  margin: 0 auto;
  max-width: 80%;
}

h1{
  font-family: 'Noto Serif';
  font-size: 40px;
}
</style>
