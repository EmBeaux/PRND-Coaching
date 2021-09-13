<template>
    <Login />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Login from "../../components/forms/login.component.vue"

@Component({
  components:{
    Login
  }
})
export default class LoginIndex extends Vue {}
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
