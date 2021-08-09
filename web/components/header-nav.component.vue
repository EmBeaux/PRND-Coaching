<template>
    <div>
        <div class="header">
        <NuxtLink to="/" class="header-item">
            Home
        </NuxtLink>
        <NuxtLink to="/about-me" class="header-item">
            About Me
        </NuxtLink>
        <NuxtLink to="/testimonials" class="header-item">
            Testimonials
        </NuxtLink>
        <NuxtLink to="/coaching" class="header-item">
            Coaching
        </NuxtLink>
        <NuxtLink to="/blog" class="header-item">
            Blog
        </NuxtLink>
        </div>
        <hr class="divider" />
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class HeaderNav extends Vue {}
</script>
