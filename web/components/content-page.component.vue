<template>
  <div class="content fv-padding">
    <div class="fv-margin-bottom fv-hidden-xs fv-hidden-sm" />
    <div class="content__header fv-margin-bottom fv-padding">
        <h1 class="fv-margin-bottom fv-text-center">
            About Me
        </h1>
        <div v-html="pageMarkdown()"></div>
    </div>
  </div>
</template>

<script lang="ts">
import '@nuxt/types'
import marked from "marked";
import { Vue, Component } from "vue-property-decorator";
import { apiCall } from '../library/api.helper';

@Component
export default class ContentPage extends Vue {
    pageText: string = "";
    async mounted() {
        await apiCall(
            "get",
            "pageText",
            { params: { page: this.$route.name }
        }).then(response => {
            if (response.data && response.data.pageTexts) {
                this.$data.pageText = response.data.pageTexts[0].markdown
            }
        })
    }
    pageMarkdown() {
        return marked(this.$data.pageText);
    }
}
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
