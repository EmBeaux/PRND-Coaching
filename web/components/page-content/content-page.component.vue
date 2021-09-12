<template>
  <div class="content fv-padding">
    <div v-if="pageText.page" class="content__header fv-margin-bottom fv-padding">
        <div class="edit-icon-container">
            <a @click="editMode = { main: !editMode.main }" class="edit-icon"><mdicon name="pencil-box-multiple-outline" /></a>
            <div v-if="!editMode.main" ref="page-text" v-html="pageTextMain" />
            <EditContentPage v-else @onSubmit="editMode = { main: false }" :id="pageText._id" :pageText="pageText" :pageTextRef="$refs['page-text']" />
        </div>
        <div class="edit-icon-container">
            <a @click="editMode = { grid: !editMode.grid }" class="edit-icon"><mdicon name="pencil-box-multiple-outline" /></a>
            <ContentPageGrid v-if="!editMode.grid" :grid="pageText.content.grid" />
            <EditContentPageGrid v-else @onSubmit="editMode = { grid: false }"  :pageText="pageText" />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { apiCall } from '../../library/api.helper';
import ContentPageGrid from './content-page-grid.component.vue'
import EditContentPageGrid from '../forms/edit-content-page-grid.component.vue'
import EditContentPage from '../forms/edit-content-page.component.vue'
import { PageText, GenericObject } from '../types/content-page.types';

@Component({
    components: {
        ContentPageGrid,
        EditContentPage,
        EditContentPageGrid
    }
})
export default class ContentPage extends Vue {
    private xeditMode: GenericObject = {
        main: false,
        grid: false
    };
    private xpageText: PageText = {
        _id: "",
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
    public set editMode(value: GenericObject) {
        this.xeditMode = { ...this.xeditMode, ...value }
    }
    public get editMode(): GenericObject {
        return this.xeditMode;
    }
    public get pageTextMain(): string {
        return this.pageText.content.main.replace(String.fromCharCode(92), "")
    }
    async mounted() {
        apiCall<{ data: { pageTexts: PageText[] } }>(
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
    margin: 3em auto !important;
    display: flex;
    width: 75%;
    flex-direction: column;
}
.edit-icon-container {
    position: relative
}

.edit-icon {
    position: absolute;
    right: 0;
    cursor: pointer;
    pointer-events: auto;
}
</style>
