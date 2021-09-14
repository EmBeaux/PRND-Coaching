<template>
  <ContentPage />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ContentPage from "../../components/page-content/content-page.component.vue"

@Component({
  components: {
    ContentPage
  }
})
export default class TestimonialsIndex extends Vue {}
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

@media (max-width: 767px) {
  .content {
    width: 100%;
    max-width: 100%;
  }
}
</style>
