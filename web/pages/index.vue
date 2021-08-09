<template>
  <div class="content fv-padding">
    <div class="fv-margin-bottom fv-hidden-xs fv-hidden-sm" />
    <div class="content__header fv-margin-bottom fv-padding">
      <div class="fv-padding fv-margin-bottom fv-text-center">
        Hello World
      </div>
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
import FramevuerkLogo from '~/components/FramevuerkLogo.vue'
import Api from '~/routes/Api.ts';

export default {
  components: {
    FramevuerkLogo
  },
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
.content {
  margin: 0 auto;
  max-width: 80%;
}
</style>
