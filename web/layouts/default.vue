<template>
  <div>
    <div class="header">
      <NuxtLink to="/" class="header-item">
        Home
      </NuxtLink>
      <NuxtLink to="/" class="header-item">
        About Me
      </NuxtLink>
      <NuxtLink to="/" class="header-item">
       Testimonials
      </NuxtLink>
      <NuxtLink to="/" class="header-item">
        Coaching
      </NuxtLink>
      <NuxtLink to="/" class="header-item">
        Blog
      </NuxtLink>
    </div>
    <hr class="divider" />
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  padding-top: 25px;
  margin: 0 auto;
  max-width: 70%;
}

.header-item {
  padding: 5px 15px;
  font-size: 12px;
}

.divider {
  margin: 0 auto;
  max-width: 80%;
}
</style>
