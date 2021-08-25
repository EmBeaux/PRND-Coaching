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

interface GridItem {
    icon: string,
    title: string,
    description: string,
    buttonText: string,
    modalType: string
}
interface PageText {
    page: string,
    content: {
        main: string,
        grid: GridItem[]
    }
}
@Component({
    components: { ContentPageGrid }
})
export default class ContentPage extends Vue {
    pageTextResponse: PageText = { page: "", content: {main: "", grid: []}};
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
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
.content {
    margin: 2.5em auto;
    display: flex;
    width: 75%;
}
.title-text {
    font-family: 'Noto Serif';
    font-size: 40px;
}

.image-container {
    width: 100%;
    height: 50vh;
    background-image: url('/stock-about-me.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: flex-end;
}

.color-text-container {
    width: 100%;
    height: 25vh;
    align-items: center;
    background-color: #987575;
    display: flex;
    justify-content: flex-start;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}

.image-text {
    width: 30%;
    color: #FAF9F6;
    font-weight: bolder;
    font-size: 45px;
    text-shadow: 4px 6px 3px rgb(0 0 0 / 30%);
    word-wrap: break-word;
    margin-top: 1em;
}

.information-color-text {
    width: 75%;
    color: white;
    font-weight: bolder;
    font-size: 22px;
    padding: 70px;
    word-wrap: break-word;
}

.image-button {
    font-size: 14px;
    background: #B90101 !important;
    border: none !important;
    box-shadow: none;
    text-shadow: none;
}

.image-button:hover {
    background: #B90101 !important;
}

.content-image {
    width: 350px
}

@media only screen and (min-width: 768px) and (max-width: 1515px) {
    .content{
        width: 100%
    }

    .color-text-container {
        flex-direction: column;
        height: fit-content;
    }

    .information-color-text {
        font-size: 20px;
        padding-top: 10px;
        padding: 0;
        margin-top: 4em;
        width: 95%;
    }

    .content-image {
        margin-top: -90px;
        margin-bottom: -80px;
    }
}

@media (max-width: 767px) {
    .content{
        width: 100%
    }

    .image-text {
        font-size: 5vh;
        width: 60%;
        padding: 0;
        padding-top: 10px;
    }

    .content-image {
        width: 230px;
        margin-top: 10px;
        margin-top: -3em;
        margin-bottom: -3em;
        margin-left: -1em;
    }

    .color-text-container {
        flex-direction: column;
        height: fit-content;
    }

    .information-color-text {
        padding: 0;
        padding-top: 10px;
        font-size: 18px;
        width: 95%;
    }
}
</style>
