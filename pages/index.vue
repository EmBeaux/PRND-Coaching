<template>
  <fvMain>
    <fvSidebar v-model="sidebar" class="sidebar">
      <div class="fv-text-center fv-padding">
        Hello World
      </div>
      <fvList parent>
        <fvListItem class="selected">
          Hello World
        </fvListItem>
        <fvListItem>
          <i class="material-icons">person</i> Hello World
        </fvListItem>
        <fvListItem>
          <i class="material-icons">mail</i> Hello World
        </fvListItem>
        <fvListItem>
          <i class="material-icons">event_available</i> Hello World
        </fvListItem>
        <fvListItem>
          <i class="material-icons">photo</i> Hello World
        </fvListItem>
      </fvList>
    </fvSidebar>
    <fvContent>
      <fvHeader>
        <fvButton class="fv-margin-end fv-hidden-lg fv-hidden-xl" @click="toggleSidebar">
          <i class="material-icons">menu</i>
        </fvButton>
        <div class="fv-margin-end">
          This is the logo
        </div>
        <div class="fv-grow">
          <h2 class="fv-hidden-xs">
            Or is this the title
          </h2>
          <small class="fv-hidden-sm fv-hidden-xs"> I think this is the titlle </small>
        </div>
        <fvButton class="fv-margin-end" @click.prevent="toggleDocsMenu">
          <i class="material-icons">list</i>
          <span class="fv-hidden-xs fv-hidden-sm"> Hello World </span>
          <fvMenu v-model="docsMenu">
            <div>
              <div class="fv-border-bottom fv-padding">
                <label class="fv-text-light"> <i class="material-icons">list</i> Hello World </label>
              </div>
              <div class="fv-padding">
                <!-- <a class="fv-link fv-block fv-margin-bottom" target="_blank" rel="noopener noreferrer" href="https://www.framevuerk.com/"><i class="material-icons">link</i> Framevuerk Docs</a>
                <a class="fv-link fv-block fv-margin-bottom" target="_blank" rel="noopener noreferrer" href="https://github.com/framevuerk/framevuerk"><i class="material-icons">link</i> Framevuerk on Github</a>
                <a class="fv-link fv-block fv-margin-bottom" target="_blank" rel="noopener noreferrer" href="https://nuxtjs.org/"><i class="material-icons">link</i> Nuxt Docs</a>
                <a class="fv-link fv-block" target="_blank" rel="noopener noreferrer" href="https://github.com/nuxt/nuxt.js"><i class="material-icons">link</i> Nuxt on GitHub</a> -->
              </div>
            </div>
          </fvMenu>
        </fvButton>
        <fvButton class="fv-margin-end">
          <i class="material-icons">clear</i>
          <span class="fv-hidden-xs fv-hidden-sm"> header </span>
        </fvButton>
        <fvButton>
          <i class="material-icons">done</i>
          <span class="fv-hidden-xs fv-hidden-sm"> header 2 </span>
        </fvButton>
      </fvHeader>
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
    </fvContent>
  </fvMain>
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
      sidebar: false,
      docsMenu: false,
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
  async mounted() {
    const foo = await Api().get('posts')
    console.log(foo);
  },
  methods: {
    toggleSidebar () {
      this.sidebar = !this.sidebar
    },
    toggleDocsMenu () {
      setTimeout(() => {
        this.docsMenu = !this.docsMenu
      })
    }
  }
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  max-width: 768px;
}

.sidebar {
  min-width: 300px;
}
</style>
