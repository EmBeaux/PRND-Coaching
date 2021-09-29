<template>
    <ContentPage />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ContentPage from "../../../components/page-content/content-page.component.vue"

@Component({
    components: { ContentPage }
})
export default class CoachingCorporateIndex extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
.content {
    font-family: 'Noto Serif';
    margin: 0 auto;
    max-width: 80%;
}

.corporate-coaching-main-content {
    margin-top: 2em;
}

.corporate-coaching-image-text-wrapper {
    display: flex;
    width: 100%;
    color: #FAF9F6;
    font-weight: bolder;
    font-size: 45px;
    text-shadow: 4px 6px 3px rgb(0 0 0 / 30%);
    word-wrap: break-word;
    margin-top: 1em;
    justify-content: center;
}

.corporate-coaching-image-container {
    width: 100%;
    height: 25vh;
    background-image: url('/stock-about-me.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
}

@media (max-width: 767px) {
    .corporate-coaching-image-container {
        height: 50vh;
    }
    .content {
        width: 100%;
        max-width: 100%;
    }
}
</style>
