<template>
    <div class="sticky">
        <div class="header">
            <div class="header-logo">
                <img width="125" src="/header-logo.png" />
            </div>
            <div class=header-nav>
                <NuxtLink to="/" class="header-nav-item">
                    Home
                </NuxtLink>
                <NuxtLink to="/about-me" class="header-nav-item">
                    About Me
                </NuxtLink>
                <NuxtLink to="/testimonials" class="header-nav-item">
                    Testimonials
                </NuxtLink>
                <NuxtLink to="/coaching" class="header-nav-item">
                    Coaching
                </NuxtLink>
                <NuxtLink to="/blog" class="header-nav-item">
                    Blog
                </NuxtLink>
            </div>
            
        </div>
        <hr class="divider" />
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class HeaderNav extends Vue {}
</script>

<style scoped>
.sticky {
    background: #f7f7f7;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.header {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 70%;
}

.header-nav {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    padding-top: 18px;
    padding-bottom: 0;
}

.header-nav-item {
    padding: 10px 15px;
    padding-bottom: 0;
    font-size: 16px;
    border-radius: 5px;
    font-family: "Sans Sarif"
}

.header-nav-item:hover {
    color: #b7523f;
    text-decoration: underline;
}

.header-logo {
    padding-top: 10px;
}

.divider {
    margin: 0;
}
</style>
