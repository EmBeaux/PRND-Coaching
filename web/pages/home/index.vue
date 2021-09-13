<template>
  <ContentPage />
</template>

<script lang="ts">
import '@nuxt/types'
import { Vue, Component } from "vue-property-decorator";
import ContentPage from "../../components/page-content/content-page.component.vue"

@Component({
  components: {
    ContentPage
  }
})
export default class AboutMeIndex extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
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
    display: flex;
    justify-content: flex-end;
}

.color-text-container {
    width: 100%;
    height: 25vh;
    align-items: center;
    background-color: #8f1e1e;
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
    width: fit-content;
    overflow: unset;
    text-overflow: unset;
}

.image-button:hover {
    background: #B90101 !important;
}

.content-image {
    width: 250px
}

@media only screen and (min-width: 768px) and (max-width: 1515px) {
    .content{
        width: 100% !important
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
        margin-top: 15px;
        margin-bottom: 15px;
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
        margin-top: 1em;
        margin-bottom: 1em;
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
