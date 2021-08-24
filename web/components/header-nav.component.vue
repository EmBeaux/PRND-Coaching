<template>
    <div class="sticky">
        <div class="header">
            <div class="header-logo">
                <img width="125" src="/header-logo.png" />
            </div>
            <div v-if="$mq === 'lg'" class="header-nav">
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
            <Slide right closeOnNavigation class="burger-menu" v-else>
                <NuxtLink to="/">
                    Home
                </NuxtLink>
                <NuxtLink to="/about-me">
                    About Me
                </NuxtLink>
                <NuxtLink to="/testimonials">
                    Testimonials
                </NuxtLink>
                <NuxtLink to="/coaching">
                    Coaching
                </NuxtLink>
                <NuxtLink to="/blog">
                    Blog
                </NuxtLink>
            </Slide>
        </div>
        <hr class="divider" />
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class HeaderNav extends Vue {}
</script>

<style>
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
    width: 50%;
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
    margin-left: 10px;
}

.divider {
    margin: 0;
}

.bm-menu {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #FAF9F6 !important;
    border-left: 1px solid black;
}

.bm-item-list {
    color: black !important;
}

.bm-cross {
    background: black !important;
}

@media only screen and (max-width: 900px) {
    .header {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;
    }
}
</style>
