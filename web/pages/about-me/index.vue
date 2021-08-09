<template>
  <ContentPage />
</template>

<script lang="ts">
import '@nuxt/types'
import { Vue, Component } from "vue-property-decorator";
import ContentPage from "../../components/content-page.component.vue"

@Component({
  components: {
    ContentPage
  }
})
export default class AboutMeIndex extends Vue {}
</script>
