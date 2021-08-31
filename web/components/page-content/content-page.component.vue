<template>
  <div class="content fv-padding">
    <div v-if="pageText.page && !editMode" class="content__header fv-margin-bottom fv-padding">
        <div ref="page-text" v-html="pageTextMain" />
        <ContentPageGrid :grid="pageText.content.grid" />
    </div>
    <div v-else-if="pageText.page" class="content__header fv-margin-bottom fv-padding">
        <EditContentPage :pageTextRef="$refs['page-text']" :editableElements="pageText.editableElements" />
        <EditContentPageGrid :grid="pageText.content.grid" />
    </div>
    <button @click="editMode = !editMode"> click me </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { apiCall } from '../../library/api.helper';
import ContentPageGrid from './content-page-grid.component.vue'
import EditContentPageGrid from '../forms/edit-content-page-grid.component.vue'
import EditContentPage from '../forms/edit-content-page.component.vue'
import { PageText } from '../types/content-page.types';

@Component({
    components: {
        ContentPageGrid,
        EditContentPage,
        EditContentPageGrid
    }
})
export default class ContentPage extends Vue {
    private xeditMode: boolean = false;
    private xpageText: PageText = {
        page: "",
        content: {
            main: "",
            grid: []
        },
        editableElements: []
    };

    public set pageText(value: PageText) {
        this.xpageText = value;
    }
    public get pageText(): PageText {
        return this.xpageText;
    }
    public set editMode(value: boolean) {
        this.xeditMode = value;
    }
    public get editMode(): boolean {
        return this.xeditMode;
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
