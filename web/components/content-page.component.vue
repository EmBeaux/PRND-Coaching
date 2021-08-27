<template>
  <div class="content fv-padding">
    <div v-if="pageText.page" class="content__header fv-margin-bottom fv-padding">
        <div v-html="pageTextMain" />
        <ContentPageGrid :grid="pageText.content.grid" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { apiCall } from '../library/api.helper';
import ContentPageGrid from './content-page-grid.component.vue'
import { PageText } from './types/content-page.types';

@Component({
    components: { ContentPageGrid }
})
export default class ContentPage extends Vue {
    pageTextResponse: PageText = {
        page: "",
        content: {
            main: "",
            grid: []
        }
    };

    public set pageText(value: PageText) {
        this.pageTextResponse = value;
    }
    public get pageText(): PageText {
        return this.pageTextResponse;
    }
    public get pageTextMain(): string {
        return this.pageText.content.main.replace(String.fromCharCode(92), "")
    }
    async mounted() {
        apiCall<{ pageTexts: PageText[] }>(
            "get",
            "pageText",
            { params: { page: this.$route.name }
        }).then(response => {
            this.pageText = response.data.pageTexts[0]
        })
    }
}
</script>

<style>
.content {
    margin: 2.5em auto !important;
    display: flex;
    width: 75%;
    flex-direction: column;
}
</style>
