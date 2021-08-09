<template>
  <div class="content fv-padding">
    <div class="fv-margin-bottom fv-hidden-xs fv-hidden-sm" />
    <div class="content__header fv-margin-bottom fv-padding">
      <h1 class="fv-margin-bottom fv-text-center">
        Richard Bowler
      </h1>
      <p>
        Hello World
      </p>
    </div>
    <div class="content__body fv-border fv-radius fv-shadow">
      <label class="fv-control-label fv-padding"> <i class="material-icons">person_add</i>Hello World</label>
      <div class="fv-padding container">

      </div>
    </div>
  </div>
</template>

<script>
import Api from '~/routes/Api.ts';

export default {
  components: {},
  data () {
    return {
      slider: 'One',
      exmps: {
        htw: 13,
        firstName: undefined,
        lastName: undefined,
        gender: 'm',
        continent: undefined,
        married: undefined,
        marriageDate: undefined,
        bio: undefined
      }
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
.content {
  margin: 0 auto;
  max-width: 80%;
}

h1{
  font-family: 'Noto Serif';
  font-size: 40px;
}
</style>
