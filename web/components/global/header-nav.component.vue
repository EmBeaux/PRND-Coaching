<template>
    <div class="sticky">
        <div class="header">
            <div v-if="$route.name !== 'login'" class="header-logo">
                <img width="125" src="/header-logo-dark.png" />
            </div>
            <div v-if="$mq === 'lg'" class="header-nav">
                <div>
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
                <NuxtLink v-if="!currentUser|| (currentUser && !currentUser.email)" to="/login" class="header-nav-item" :style="{ padding: '0 10px' }">
                    Sign In
                </NuxtLink>
                <a v-else @click="signOutModal = true" class="header-nav-item" :style="{ padding: '0 10px' }">
                    Sign Out
                </a>
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
                <NuxtLink to="/login">
                    Sign In
                </NuxtLink>
            </Slide>
        </div>
        <hr class="divider" />
        <Modal
            v-if="signOutModal"
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
                        <button @click="this.signOutModal = false" class="fv-button fv-secondary image-button"> Cancel </button>
                    </div>
                </div>
            </template>
        </Modal>
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
    public currentUser: any;
    public setCurrentUser: (payload: any) => void;

    public set signOutModal(value: boolean) {
        this.xsignOutModal = value;
    }
    public get signOutModal(): boolean {
        return this.xsignOutModal;
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
    .header {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;
    }
}
</style>
