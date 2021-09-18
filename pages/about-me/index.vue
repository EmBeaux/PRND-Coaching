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
.introduction-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #8f1e1e;
}

.headshot {
  width: 45vh;
}

.introduction-text {
  margin-top: 2em;
  max-width: 50%;
  font-family: 'Noto Serif';
}

.introduction-body {
  margin-bottom: 2em;
  max-width: 60%;
  color: white;
  line-height: 1.5em;
  font-size: 18px;
}

.introduction-header {
  color: white;
  font-weight: bold;
  font-size: 35px;
  word-wrap: break-word;
  margin-top: 1em;
}

@media only screen and (min-width: 768px) and (max-width: 1515px) {
  .introduction-container {
    flex-direction: column;
    align-items: center;
  }

  .introduction-text {
    margin-top: -4em;
    max-width: 100%;
    font-family: 'Noto Serif';
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .content {
    width: 100%;
    max-width: 100%;
  }
  
  .headshot {
    width: 40vh;
  }

  .introduction-container {
    flex-direction: column;
    align-items: center;
  }

  .introduction-text {
    margin-top: -4em;
    max-width: 100%;
    font-family: 'Noto Serif';
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5em;
  }

  .introduction-body {
    max-width: 100%;
    margin-bottom: 2em;
    color: white;
    line-height: 1.5em;
    font-size: 15px;
    text-align: center;
    padding: .5%;
  }
  .introduction-header {
    font-size: 30px;
  }
}
</style>
