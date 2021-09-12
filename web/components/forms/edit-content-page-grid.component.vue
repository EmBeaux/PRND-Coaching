<template>
    <div class="modal-grid">
        <div v-for="gridItem in grid" :key="gridItem._id" class="edit-grid-item">
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
            <img class="grid-item-image" v-if="gridItem.image && !imageFormData && !imageSaving" :src="gridItem.image" />
            <FileUpload v-if="gridItem.image" @imageSaving="imageSaving = $event" @imageChange="onImageChange($event, gridItem._id)" />
        </div>
        <button @click="onSubmitGrid"> Submit </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { GridItem } from '../types/content-page.types';
import FileUpload from '../global/file-upload.component.vue'

interface ImageFormDataObject {
    [key: string]: FormData
}
@Component({
    components: {
        FileUpload
    }
})
export default class EditContentPageGrid extends Vue {
    @Prop() readonly grid: GridItem[]
    @Prop() readonly id: string
    private ximageFormData: ImageFormDataObject | null = null;
    private ximageSaving: boolean = false;
    private xformGrid: GridItem[];
    public set imageFormData(value: ImageFormDataObject | null) {
        this.ximageFormData = value;
    }
    public get imageFormData(): ImageFormDataObject | null {
        return this.ximageFormData;
    }
    public set imageSaving(value: boolean) {
        this.ximageSaving = value;
    }
    public get imageSaving(): boolean {
        return this.ximageSaving;
    }
    public set formGrid(value: GridItem[]) {
        this.xformGrid = value;
    }
    public get formGrid(): GridItem[] {
        return this.xformGrid;
    }
    public onImageChange(imageFormData: FormData, id: string) {
        let newObj: ImageFormDataObject = {};
        if (this.imageFormData) {
            newObj = { ...this.imageFormData }
        }
        newObj[id] = imageFormData;
        this.imageFormData = newObj
        this.readBuffer(id, imageFormData);
    }
    public onSubmitGrid() {
        // debugger;
        // if (this.imageFormData) {
        //     Object.keys(this.imageFormData).forEach(newImage => {
                
        //     })
        // }
    }
    public readBuffer(id: string, formData: FormData): void {
        const reader = new FileReader();

        reader.onload = (e) => {
            const formGridIndex = this.formGrid.findIndex(gridItem => {
                gridItem._id === id
            })

            const mutatedFormGrid = this.formGrid;
            debugger;
            // mutatedFormGrid[formGridIndex].image = 
        }
        debugger;
        // reader.readAsBinaryString()
    }
    mounted() {
        this.formGrid = this.grid;
    }
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
