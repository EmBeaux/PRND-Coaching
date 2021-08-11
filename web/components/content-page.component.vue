<template>
  <div class="content fv-padding">
    <!-- <div class="fv-margin-bottom fv-hidden-xs fv-hidden-sm" /> -->
    <div class="content__header fv-margin-bottom fv-padding">
        <!-- <h1 class='fv-margin-bottom fv-text-center title-text'>About Me</h1> -->
        <div class="image-container">
            <div class="image-text">
                this is some text that is inspiring

                <NuxtLink class="fv-button fv-secondary image-button" to="/"> Do Something </NuxtLink>
            </div>
        </div>
        <p><em>Professional Carrer, Life, and Relationship Coach in Groveland, MA</em>  </p>
        <p><strong>“Knowing others is wisdom, knowing yourself is enlightenment.” Lao Tzu</strong>  </p>
        <p><strong>Are you a high performer and dedicated to bringing out the best in yourself, your team, employees or clients? Do you want to develop yourself to be the best that you can be? Do you want to become a more powerful Influencer? Are you interested in learning to use Emotional Intelligence to modify habits and self-limiting beliefs so that your strengths will flourish?</strong>  </p>
        <p><strong>Do you want to use mindfulness, improve communication in your relationships, resolve and reduce conflict and bring your relationship to a higher level?</strong>  </p>
        <p><strong>Are you a businesses owner who wants to take your business to the next levels of success?</strong>  </p>
        <p>I&#39;m Richard Bowler, a Professional Growth, Relationship and Executive Coach with over 30 years of experience mentoring and guiding people. My goal is to develop a trusting coaching relationship, to provide clarity, advance your thinking, offer fresh perspectives, bring solutions that help you accomplish your unique goals! I work globally with individuals and business teams.</p>
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
    margin: 2.5em auto;
    max-width: 70%;
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

.image-text {
    width: 30%;
    color: white;
    font-weight: bolder;
    font-size: 45px;
    text-shadow: 4px 6px 3px rgb(0 0 0 / 30%);
    word-wrap: break-word;
}

.image-button {
    font-size: 14px;
}
</style>
