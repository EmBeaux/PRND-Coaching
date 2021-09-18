<template>
    <div>
        <hr class="divider" />
        <div class="footer">
            <div v-if="$route.name !== 'login'" class="footer-logo">
                <img width="125" src="/header-logo-dark.png" />
            </div>
            <div class="footer-links">
                <div>
                    <a href="https://www.google.com" class="footer-nav-item">
                        Instagram
                    </a>
                    <a href="https://www.google.com" class="footer-nav-item">
                        Facebook
                    </a>
                    <a href="https://www.google.com" class="footer-nav-item">
                        Tiktok
                    </a>
                    <a href="https://www.google.com" class="footer-nav-item">
                        Twitter
                    </a>
                    <a href="https://www.google.com" class="footer-nav-item">
                        Email
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style>
.footer {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 60%;
    min-height: 4.5em;
    align-items: center;
}

.footer-links {
    display: flex;
}

.footer-nav-item {
    padding: 10px 15px;
    padding-bottom: 0;
    font-size: 16px;
    border-radius: 5px;
    font-family: "Sans Sarif"
}

.footer-nav-item:hover {
    color: #b7523f;
    text-decoration: underline;
}

.footer-logo {
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

.sign-out-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sign-out-buttons {
    margin-top: 5%;
}

@media only screen and (max-width: 900px) {
    .footer {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;
    }
}
</style>
