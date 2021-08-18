<template>
  <div class="content fv-padding">
    <!-- <div class="fv-margin-bottom fv-hidden-xs fv-hidden-sm" /> -->
    <div class="content__header fv-margin-bottom fv-padding">
        <!-- <h1 class='fv-margin-bottom fv-text-center title-text'>About Me</h1> -->
        <div class="image-container">
            <div class="image-text">
                Want to expand your carrer? Schedule A Consult.

                <a class="fv-button fv-secondary image-button" href="/coaching"> Do Something </a>
            </div>
        </div>
        <div class="color-text-container">
            <div class="information-color-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium mattis ligula eu feugiat. Duis quis sem ac justo fermentum congue in sed enim. Phasellus id felis eget quam accumsan porta a quis leo. Nam sed lorem et mi vehicula rutrum ac eget quam. Suspendisse varius consequat felis ut porttitor. Mauris eget risus hendrerit nulla faucibus efficitur nec ac nibh. Sed in ullamcorper dui. Curabitur cursus mauris a ex la
            </div>
            <div class="">
                <img width="350" src="/final-02.png" />
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
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

        const fo = this.$mq;
    }
    pageMarkdown() {
        return marked(this.$data.pageText);
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
.content {
    margin: 2.5em auto;
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
    background-color: #6A957F;
    display: flex;
    justify-content: flex-start;
}

.image-text {
    width: 30%;
    color: white;
    font-weight: bolder;
    font-size: 45px;
    text-shadow: 4px 6px 3px rgb(0 0 0 / 30%);
    word-wrap: break-word;
}

.information-color-text {
    width: 75%;
    color: white;
    font-weight: bolder;
    font-size: 24px;
    padding: 70px;
    word-wrap: break-word;
}

.image-button {
    font-size: 14px;
    background: #B90101;
    border: none !important;
    box-shadow: none;
    text-shadow: none;
}

.image-button:hover {
    background: #B90101 !important;
}
</style>
