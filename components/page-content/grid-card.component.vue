<template>
    <div>
        <div class="modal-grid">
            <div v-for="gridItem in grid" :key="gridItem.title" class="grid-item">
                <mdicon v-if="gridItem.icon" :name="gridItem.icon" /> 
                <h3 class="grid-item-title" :style="{ color: gridItem.image && '#B90101', marginTop: gridItem.image && $mq === 'lg' && '20%' }">{{ gridItem.title }}</h3>
                <p class="grid-item-description"> {{ gridItem.description }} </p>
                <button
                    v-if="gridItem.buttonText"
                    type="button"
                    class="fv-button fv-secondary image-button"
                    @click="setActiveModal(`${gridItem.modalType}`)"
                >
                    {{ gridItem.buttonText }}
                </button>
                <img class="grid-item-image" v-if="gridItem.image" :src="gridItem.image" />
            </div>
        </div>
        <Modal
            v-if="calendlyURL"
            v-on:close="setActiveModal('')"
        >
            <template #header>
                Schedule a consult
            </template>

            <template #body>
                <vue-calendly :url="calendlyURL" :height="1000"></vue-calendly>
            </template>
        </Modal>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Modal from '../global/modal.component.vue'
import { GridItem, ActiveModal } from '../types/content-page.types';

@Component({
    components: { Modal }
})
export default class GridCard extends Vue {
    @Prop() readonly grid: GridItem[]
    public activeModal: ActiveModal = "";

    setActiveModal(variable: ActiveModal) {
        this.activeModal = variable;
    }
    public get calendlyURL(): string {
        let activeURL: string = "https://calendly.com/prndcoaching/";
        switch(this.activeModal) {
            case 'seminar':
                activeURL += 'seminar-session-no-charge-1-hour'
                break;
            case 'consult':
                activeURL += 'initial-consult-no-charge-30-minutes'
                break;
            case '360':
                activeURL += '360-assessor-interview-15-30-mins'
                break;
            default:
            activeURL = ""
                break;
        }
        return activeURL;
    }
}
</script>

<style>
.modal-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 4em;
}

.grid-item {
    border: 1px solid rgba(128,128,128,.3);
    border-radius: 5px;
    height: 20em;
    width: 22em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 4%;
    text-align: center;
    align-items: center;
    margin-right: 1em;
    margin-top: 1em;
}

.grid-item-title {
    margin-bottom: 1em;
}

.grid-item-description {
    margin-bottom: 1em;
    text-align: left;
}

.grid-item-image {
    width: 15vh;
}

.mdi {
    color: #B90101;
    height: 40px;
    width: 40px;
    margin-bottom: 2em;
}

.mdi > svg {
    vertical-align: middle;
    height: inherit;
    width: inherit;
}

@media only screen and (min-width: 768px) and (max-width: 1515px) {
    .modal-grid {
        margin-top: 0em;
    }

    .grid-item {
        margin-top: 4em;
        margin-right: 1em;
    }
}

@media (max-width: 767px) {
    .modal-grid {
        margin-top: 0em;
    }

    .grid-item {
        margin-top: 4em;
        padding: 16%;
        margin-right: 0em
    }
}
</style>
