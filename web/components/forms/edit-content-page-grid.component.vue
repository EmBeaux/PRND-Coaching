<template>
    <div class="modal-grid">
        <div v-for="gridItem in grid" :key="gridItem.title" class="edit-grid-item">
            <mdicon v-if="gridItem.icon" :name="gridItem.icon" /> 
            <textarea class="grid-item-title" v-model="gridItem.title" :style="{ color: gridItem.image && '#B90101' }"></textarea>
            <textarea class="grid-item-description" v-model="gridItem.description"></textarea>
            <textarea
                v-if="gridItem.buttonText"
                type="button"
                class="fv-button"
                style="cursor: text"
                v-model="gridItem.buttonText"
            >
            </textarea>
            <img class="grid-item-image" v-if="gridItem.image" :src="gridItem.image" />
            <FileUpload />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { GridItem } from '../types/content-page.types';
import FileUpload from '../global/file-upload.component.vue'

@Component({
    components: {
        FileUpload
    }
})
export default class EditContentPageGrid extends Vue {
    @Prop() readonly grid: GridItem[]
    @Prop() readonly id: string

    
}
</script>

<style>
.edit-grid-item {
    border: 1px solid rgba(128,128,128,.3);
    border-radius: 5px;
    height: 20em;
    width: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
