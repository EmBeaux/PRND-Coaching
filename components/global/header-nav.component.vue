<template>
    <div class="sticky">
        <no-ssr>
            <div class="header">
                <div v-show="$route.name !== 'login'" class="header-logo">
                    <img width="125" src="/header-logo-dark.png" />
                </div>
                <div v-show="$mq === 'lg'" class="header-nav">
                    <div class="header-nav-base">
                        <NuxtLink to="/" class="header-nav-item">
                            Home
                        </NuxtLink>
                        <NuxtLink to="/about-me" class="header-nav-item">
                            About Me
                        </NuxtLink>
                        <NuxtLink to="/testimonials" class="header-nav-item">
                            Testimonials
                        </NuxtLink>
                        <div  @mouseover="coachNav = true" @mouseleave="coachNav = false" class="sub-nav-wrapper">
                            <a class="header-nav-item">
                                Coaching
                            </a>
                            <div class="sub-nav-options" v-if="coachNav">
                                <a href="/coaching/individual" class="header-nav-item sub-option"> Individual </a>
                                <a href="/coaching/corporate" class="header-nav-item sub-option"> Corporate</a>
                            </div>
                        </div>
                        <NuxtLink to="/blog" class="header-nav-item">
                            Blog
                        </NuxtLink>

                    </div>
                    <NuxtLink v-show="!currentUser|| (currentUser && !currentUser.email)" to="/login" class="header-nav-item" :style="{ padding: '0 10px' }">
                        Sign In
                    </NuxtLink>
                    <a v-show="currentUser && currentUser.email" @click="signOutModal = true" class="header-nav-item" :style="{ padding: '0 10px' }">
                        Sign Out
                    </a>
                </div>
                <Slide right class="burger-menu" v-show="$mq !== 'lg'">
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/about-me">
                        About Me
                    </NuxtLink>
                    <NuxtLink to="/testimonials">
                        Testimonials
                    </NuxtLink>
                    <div class="sub-nav-wrapper-mobile">
                        <a @click="coachNav = !coachNav">
                            Coaching
                        </a>
                        <div class="sub-nav-options-mobile" v-if="coachNav">
                            <NuxtLink to="/coaching/individual" class="sub-option-mobile"> Individual </NuxtLink>
                            <NuxtLink to="/coaching/corporate" class="sub-option-mobile"> Corporate</NuxtLink>
                        </div>
                    </div>
                    <NuxtLink to="/blog">
                        Blog
                    </NuxtLink>
                    <NuxtLink v-show="!currentUser|| (currentUser && !currentUser.email)" to="/login">
                        Sign In
                    </NuxtLink>
                    <a v-show="currentUser && currentUser.email" @click="signOutModal = true">
                        Sign Out
                    </a>
                </Slide>
            </div>
            <hr class="divider" />
            <Modal
                v-show="signOutModal"
                v-on:close="signOutModal = false"
            >
                <template #header>
                    Are you sure you want to sign out?
                </template>

                <template #body>
                    <div class="sign-out-wrapper">
                        Are you sure you want to sign out?
                        <div class="sign-out-buttons">
                            <button @click="logOut" class="fv-button fv-secondary image-button"> Confirm </button>
                            <button @click="signOutModal = false" class="fv-button fv-secondary image-button"> Cancel </button>
                        </div>
                    </div>
                </template>
            </Modal>
        </no-ssr>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Modal from "./modal.component.vue";
import { mapActions, mapGetters } from "vuex";

@Component({
    components: {
        Modal
    },
    methods: {
        ...mapActions({
            setCurrentUser: "SET_CURRENT_USER"
        })
    },
    computed: {
        ...mapGetters({
            currentUser: "GET_CURRENT_USER"
        })
    }
})
export default class HeaderNav extends Vue {
    private xsignOutModal: boolean = false;
    private xcoachNav: boolean = false;
    public currentUser: any;
    public setCurrentUser: (payload: any) => void;

    public set signOutModal(value: boolean) {
        this.xsignOutModal = value;
    }
    public get signOutModal(): boolean {
        return this.xsignOutModal;
    }
    public set coachNav(value: boolean) {
        this.xcoachNav = value;
    }
    public get coachNav(): boolean {
        return this.xcoachNav;
    }
    public logOut() {
        this["$auth"].logout('local').then(() => {
            this.setCurrentUser({})
            this.signOutModal = false;
        })
    }
}
</script>

<style>
.sticky {
    background: #f7f7f7;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}

.header {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 60%;
    min-height: 4.5em;
    align-items: center;
}

.header-nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-top: 18px;
    padding-bottom: 0;
    width: 100%;
}

.header-nav-base {
    display: flex;
}

.sub-nav-wrapper {
    position: relative;
}

.sub-nav-wrapper-mobile {
    display: flex;
    flex-direction: column;
}

.sub-nav-options {
    position: absolute;
    flex-direction: column;
    display: flex;
    background: #8F1E1E;
    border: 1px solid rgba(128,128,128,.3);
    border-top: none;
    border-radius: 3px;
    color: white;
}

.sub-nav-options-mobile {
    display: flex;
    flex-direction: column;
    padding-left: 1em;
}

.sub-option {
    margin-top: 7px;
    margin-bottom: 6px;
}

.sub-option:hover {
    color: white !important;
}

.sub-option-mobile {
    margin-top: .5em;
}

.header-nav-item {
    padding: 0px 15px;
    padding-bottom: 0;
    font-size: 16px;
    border-radius: 5px;
    font-family: "Sans Sarif"
}

.header-nav-item:hover {
    color: #8F1E1E;
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

.sign-out-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sign-out-buttons {
    margin-top: 5%;
}

@media only screen and (max-width: 1200px) {
    .header {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;
    }
}
</style>
