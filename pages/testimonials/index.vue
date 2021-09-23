<template>
  <ContentPage />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ContentPage from "../../components/page-content/content-page.component.vue"

@Component({
  components: {
    ContentPage
  }
})
export default class TestimonialsIndex extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
.content {
  margin: 0 auto;
  max-width: 80%;
  font-family: 'Noto Serif';
}

.testimonial-image-text-wrapper {
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

.testimonial-image-container {
  width: 100%;
  height: 25vh;
  background-image: url('/stock-about-me.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
}

.testimonial-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 4em;
    font-family: 'Noto Serif';
    border-radius: 5px;
    padding-top: 1em;
}
.testimonial-grid-item {
    border: 2px solid rgba(128,128,128,.3);
    border-radius: 5px;
    min-height: 10em;
    height: fit-content;
    width: 70em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 4%;
    text-align: left;
    align-items: center;
    margin-right: 1em;
    margin-left: 1em;
    margin-bottom: 4em;
    font-size: 16px;
}

.testimonial-title {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-top: 1em;
}

.testimonial-job {
  font-style: italic;
}

.testimonial-name {
  color: #B90101 !important;
  font-weight: bold;
}

@media (max-width: 767px) {
  .testimonial-image-container {
    height: 50vh;
  }

  .testimonial-grid {
    border: none;
  }
}

@media (max-width: 767px) {
  .content {
    width: 100%;
    max-width: 100%;
  }
}
</style>
