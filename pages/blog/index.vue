<template>
  <div class="content fv-padding">
    <div class="blog-feature-container">
        <img class="featured-blog-image" src="/business-man-stock.png">
        <div class="featured-blog-info">
          <div class="featured-blog-title">What does it mean to be a blog image?</div>
          <button class="fv-button fv-secondary image-button">Read More</button>
        </div>
    </div>
    <div class="blog-content-container">
      <div class="blog-side-nav">
        <mdicon class="search-icon" name="magnify" />
        <input class="blog-nav-search" placeholder="Search Categories..." type="text"/>
        <ul class="blog-nav-categories">
          <li class="blog-nav-category"> Marketing </li>
          <li class="blog-nav-category"> Life Improvement </li>
          <li class="blog-nav-category"> Money Managment </li>
          <li class="blog-nav-category"> Work Life Balance </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class HomeIndex extends Vue {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
.content {
  font-family: 'Noto Serif';
  margin: 0 auto;
  max-width: 80%;
}

.blog-feature-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #8f1e1e;
}

.featured-blog-image {
  width: 45vh;
}

.featured-blog-info {
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

.featured-blog-title {
  color: white;
  font-weight: bold;
  font-size: 35px;
  word-wrap: break-word;
  margin-top: 1em;
}

.blog-content-container {
  position: relative;
}

.blog-side-nav {
  position: fixed;
}

.blog-nav-search {
  border: 1px solid black;
  border-radius: 5px;
}

.search-icon {
  width: 25px;
}

@media only screen and (min-width: 768px) and (max-width: 1515px) {
  .blog-feature-container {
    flex-direction: column;
    align-items: center;
  }

  .featured-blog-info {
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
  
  .featured-blog-image {
    width: 40vh;
  }

  .blog-feature-container {
    flex-direction: column;
    align-items: center;
  }

  .featured-blog-info {
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
  .featured-blog-title {
    font-size: 30px;
  }
}
</style>
