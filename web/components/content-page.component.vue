<template>
  <div class="content fv-padding">
    <!-- <div class="fv-margin-bottom fv-hidden-xs fv-hidden-sm" /> -->
    <div class="content__header fv-margin-bottom fv-padding">
        <!-- <h1 class='fv-margin-bottom fv-text-center title-text'>About Me</h1> -->
        <div class="image-container">
            <div class="image-text">
                Want to expand your carrer? Schedule A Consult.

                <a class="fv-button fv-secondary image-button" href="/coaching"> Do Something </a>
            </div>
        </div>
        <div class="color-text-container">
            <div class="information-color-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium mattis ligula eu feugiat. Duis quis sem ac justo fermentum congue in sed enim. Phasellus id felis eget quam accumsan porta a quis leo. Nam sed lorem et mi vehicula rutrum ac eget quam. Suspendisse varius consequat felis ut porttitor. Mauris eget risus hendrerit nulla faucibus efficitur nec ac nibh. Sed in ullamcorper dui. Curabitur cursus mauris a ex la
            </div>
            <div class="">
                <img class="content-image" src="/final-02.png" />
            </div>
        </div>
        <div class="modal-grid">
            <!-- <vue-calendly class="grid-item" url="https://calendly.com/prndcoaching/360-assessor-interview-15-30-mins" :height="600"></vue-calendly>
            <vue-calendly class="grid-item" url="https://calendly.com/prndcoaching/360-assessor-interview-15-30-mins" :height="600"></vue-calendly> -->
            <div class="grid-item">
                Grid Item with a button
                <button
                    type="button"
                    class="btn"
                    v-on:click="isModalVisible = true"
                >
                    Open Modal!
                </button>
            </div>
            <div class="grid-item">
                Grid Item with a button
                <button
                    type="button"
                    class="btn"
                    v-on:click="isModalVisible = true"
                >
                    Open Modal!
                </button>
            </div>
            <div class="grid-item">
                Grid Item with a button
                <button
                    type="button"
                    class="btn"
                    v-on:click="isModalVisible = true"
                >
                    Open Modal!
                </button>
            </div>
            <div class="grid-item">
                Grid Item with a button
                <button
                    type="button"
                    class="btn"
                    v-on:click="isModalVisible = true"
                >
                    Open Modal!
                </button>
            </div>
        </div>

        <Modal
            v-show="isModalVisible"
            @close="closeModal"
        />
    </div>
  </div>
</template>

<script lang="ts">
import marked from "marked";
import { Vue, Component } from "vue-property-decorator";
import { apiCall } from '../library/api.helper';
import Modal from './modal.component.vue'

@Component({
    components: { Modal }
})
export default class ContentPage extends Vue {
    pageText: string = "";
    isModalVisible: boolean = false;
    async mounted() {
        await apiCall(
            "get",
            "pageText",
            { params: { page: this.$route.name }
        }).then(response => {
            if (response.data && response.data.pageTexts) {
                this.$data.pageText = response.data.pageTexts[0].markdown
            }
        })
    }
    closeModal() {
        this.$data.isModalVisible = false;
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
.content {
    margin: 2.5em auto;
    display: flex;
}
.title-text {
    font-family: 'Noto Serif';
    font-size: 40px;
}

.image-container {
    width: 100%;
    height: 50vh;
    background-image: url('/stock-about-me.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: flex-end;
}

.color-text-container {
    width: 100%;
    height: 25vh;
    align-items: center;
    background-color: #6A957F;
    display: flex;
    justify-content: flex-start;
}

.image-text {
    width: 30%;
    color: white;
    font-weight: bolder;
    font-size: 45px;
    text-shadow: 4px 6px 3px rgb(0 0 0 / 30%);
    word-wrap: break-word;
}

.information-color-text {
    width: 75%;
    color: white;
    font-weight: bolder;
    font-size: 24px;
    padding: 70px;
    word-wrap: break-word;
}

.image-button {
    font-size: 14px;
    background: #B90101;
    border: none !important;
    box-shadow: none;
    text-shadow: none;
}

.image-button:hover {
    background: #B90101 !important;
}

.content-image {
    width: 350px
}

.modal-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 4em;
}

.grid-item {
border: 1px solid grey;
    border-radius: 5px;
    height: 20em;
    width: 20em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5%;
}
@media only screen and (min-width: 768px) and (max-width: 1250px) {
    .modal-grid {
        margin-top: 0em;
    }

    .grid-item {
        margin-top: 4em;
        padding: 10%;
    }

    .color-text-container {
        flex-direction: column;
        height: fit-content;
    }

    .information-color-text {
        font-size: 20px;
        padding-top: 10px;
        padding: 0;
        margin-top: 4em;
    }

    .content-image {
        margin-top: -90px;
        margin-bottom: -80px;
    }
}

@media (max-width: 767px) {
    .modal-grid {
        margin-top: 0em;
    }

    .grid-item {
        margin-top: 4em;
        padding: 20%;
    }

    .image-text {
        font-size: 5vh;
        width: 60%;
        padding: 0;
        padding-top: 10px;
    }

    .content-image {
        width: 230px;
        margin-top: 10px;
    }

    .color-text-container {
        flex-direction: column;
        height: fit-content;
    }

    .information-color-text {
        padding: 0;
        padding-top: 10px;
        font-size: 18px;
    }
}
</style>
