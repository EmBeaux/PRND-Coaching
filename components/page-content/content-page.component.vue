<template>
    <div class="content fv-padding">
        <div v-if="!loading" class="content__header fv-margin-bottom fv-padding">
            <div class="edit-icon-container">
                <a v-if="currentUser && currentUser.isAdmin" @click="editMode = { main: !editMode.main }" class="edit-icon"><mdicon name="pencil-box-multiple-outline" /></a>
                <div v-if="!editMode.main" ref="page-text" v-html="$route.name && pageTexts[$route.name] ? pageTexts[$route.name].content.main.replace(String.fromCharCode(92), '') : ''" />
                <EditContentPage v-else @onSubmit="editMode = { main: false }" :id="pageTexts[$route.name]._id" :pageText="pageTexts[$route.name]" :pageTextRef="$refs['page-text']" />
            </div>
            <div v-if="$route.name && pageTexts[$route.name] && pageTexts[$route.name].content.grid.length" class="edit-icon-container">
                <a v-if="currentUser && currentUser.isAdmin" @click="editMode = { grid: !editMode.grid }" class="edit-icon"><mdicon name="pencil-box-multiple-outline" /></a>
                <ContentPageGrid v-if="!editMode.grid" :grid="pageTexts[$route.name] ? pageTexts[$route.name].content.grid : []" />
                <EditContentPageGrid v-else @onSubmit="editMode = { grid: false }"  :pageText="pageTexts[$route.name]" />
            </div>
            <div v-if="$route.name && pageTexts[$route.name] && pageTexts[$route.name].content.calendly" class="edit-icon-container">
                <a v-if="currentUser && currentUser.isAdmin" @click="editMode = { calendly: !editMode.calendly }" class="edit-icon"><mdicon name="pencil-box-multiple-outline" /></a>
                <vue-calendly v-if="!editMode.calendly" :url="pageTexts[$route.name].content.calendly" :height="600"></vue-calendly>
                <div v-else class="edit-calendly-wrapper">
                    <input type="text" v-model="pageTexts[$route.name].content.calendly" class="edit-calendly-url">
                    <button @click="calendlyEditSubmit"> Submit </button>
                </div>

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
import { mapGetters, mapActions } from "vuex";

@Component({
    components: {
        ContentPageGrid,
        EditContentPage,
        EditContentPageGrid
    },
    computed: {
        ...mapGetters({
            currentUser: "GET_CURRENT_USER",
            pageTexts: "GET_PAGE_TEXTS"
        })
    },
    methods: {
        ...mapActions({
            setSinglePageText: "SET_SINGLE_PAGE_TEXT"
        })
    }
})
export default class ContentPage extends Vue {
    private xeditMode: GenericObject = {
        main: false,
        grid: false,
        calendly: false
    };
    private xloading: boolean = false;
    public currentUser: any;
    public pageTexts: { [key: string]: PageText };
    private setSinglePageText: (payload: { name: string, value: PageText }) => void;

    public set editMode(value: GenericObject) {
        this.xeditMode = { ...this.xeditMode, ...value }
    }
    public get editMode(): GenericObject {
        return this.xeditMode;
    }

    public set loading(value: boolean) {
        this.xloading = value;
    }
    public get loading(): boolean {
        return this.xloading;
    }
    async mounted() {
        if (this.$route.name && !this.pageTexts[this.$route.name]) {
            this.loading = true;        
            apiCall<{ data: { pageTexts: PageText[], isAdmin: boolean } }>(
                "get",
                "pageText",
                { params: { page: this.$route.name } }
            ).then(response => {
                if (this.$route.name) {
                    this.setSinglePageText({ name: this.$route.name, value: response.data.pageTexts[0] })
                }
                this.loading = false;
            })
        }
    }
    public calendlyEditSubmit() {
        if (this.$route.name && this.pageTexts[this.$route.name]) {
            apiCall<{ data: { success: boolean, message: string } }>(
                "put",
                "pageText",
                { id: this.pageTexts[this.$route.name]._id },
                this.pageTexts[this.$route.name]
            ).then(response => {
                if (response.data.success) {
                    if (this.$route.name) {
                        this.setSinglePageText({ name: this.$route.name, value: this.pageTexts[this.$route.name] })
                        this.editMode = { calendly: false };
                    }
                }
            })
        }
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

.edit-calendly-url {
    border: 1px solid grey;
    border-radius: 3px;
    width: 75%;
    margin-bottom: 2em;
}

.edit-calendly-wrapper {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-top: 3em;
    flex-direction: column;
}
</style>
