<template>
  <div class="content fv-padding">
    <div class="introduction-container">
      <img class="headshot" src="/business-man-stock.png" />
      <div class="introduction-text">
        <div class="introduction-header">
          Richard Bowler
        </div>
        <div class="introduction-body">
          Tom Henschel’s first memory of teaching was lining up his toys and explaining the world to them. Since then, he has coached leaders and teams around the world in companies large and small. He’s known for helping disruptive executives be better team players and for helping rising stars achieve The Look & Sound of Leadership. His podcast has become a global phenomenon. He donates time to developing women early in their careers. He also serves on the board of a small independent school in Los Angeles that delivers education for democracy in a way that inspires him daily.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '@nuxt/types'
import { Vue, Component } from "vue-property-decorator";
import ContentPage from "../../components/content-page.component.vue"

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
  background-color: #987575;
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
  color: #B90101;
  font-size: 35px;
  word-wrap: break-word;
  margin-top: 1em;
}

@media only screen and (min-width: 768px) and (max-width: 1515px) {
  .introduction-container {
    flex-direction: column;
  }

  .introduction-text {
    margin-top: -4em;
    max-width: 95%;
    font-family: 'Noto Serif';
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .introduction-container {
    flex-direction: column;
  }

  .introduction-text {
    margin-top: -4em;
    max-width: 95%;
    font-family: 'Noto Serif';
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .introduction-body {
    max-width: 100%;
    margin-bottom: 2em;
    color: white;
    line-height: 1.5em;
    font-size: 15px;
    text-align: center;
  }
}
</style>
