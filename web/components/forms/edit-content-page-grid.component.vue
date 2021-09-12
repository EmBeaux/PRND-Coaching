<template>
    <div class="modal-grid-edit">
        <div class="modal-grid">
            <div v-for="gridItem in formGrid" :key="gridItem._id" class="edit-grid-item">
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
                <img class="grid-item-image" v-if="gridItem.image && imageFormData && imageFormData[gridItem._id]" :src="gridItem.image" />
                <button v-if="gridItem.image" @click="setUploadNewFile(gridItem._id, true)" class="fv-button fv-secondary image-button"> Upload new image </button>
                <Modal
                    v-if="uploadNewFile[gridItem._id]"
                    v-on:close="setUploadNewFile(gridItem._id, false)"
                >
                    <template #header>
                        Upload a File
                    </template>

                    <template #body>
                        <FileUpload v-if="gridItem.image" :id="gridItem._id" @imageChange="onImageChange($event, gridItem._id)" /> 
                    </template>
                </Modal>
            </div>
        </div>
        <button @click="onSubmitGrid"> Submit </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";
import { GridItem, PageText, Photo } from '../types/content-page.types';
import FileUpload from '../global/file-upload.component.vue'
import { apiCall } from '../../library/api.helper';
import Modal from '../global/modal.component.vue'

interface ImageFormDataObject {
    [key: string]: FormData
}
@Component({
    components: {
        FileUpload,
        Modal
    }
})
export default class EditContentPageGrid extends Vue {
    @PropSync('pageText', { type: Object }) syncedPageText: PageText
    private xuploadNewFile: { [key: string]: boolean } = {};
    private ximageFormData: ImageFormDataObject | null = null;
    private xformGrid: GridItem[] = [];
    public set uploadNewFile(value: { [key: string]: boolean }) {
        this.xuploadNewFile = value;
    }
    public get uploadNewFile(): { [key: string]: boolean } {
        return this.xuploadNewFile;
    }
    public setUploadNewFile(id, value)  {
        const newObj = {}
        newObj[id] = value;
        this.uploadNewFile = { ...this.uploadNewFile, ...newObj }
    }
    public set imageFormData(value: ImageFormDataObject | null) {
        this.ximageFormData = value;
    }
    public get imageFormData(): ImageFormDataObject | null {
        return this.ximageFormData;
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
        this.setUploadNewFile(id, false)
    }
    public async onSubmitGrid() {
        const clonedPageText = JSON.parse(JSON.stringify(this.syncedPageText));
        for (let i = 0; i < this.syncedPageText.content.grid.length; i++) {
            let syncedPageGridItem = this.syncedPageText.content.grid[i]
            let clonedPageGridItem = clonedPageText.content.grid[i]
            const formGridItem = this.formGrid[i];
            if (this.imageFormData && this.imageFormData[syncedPageGridItem._id] && syncedPageGridItem.image) {
                const photo = await this.saveImage(this.imageFormData[syncedPageGridItem._id])
                if (photo) {
                    clonedPageGridItem.image = photo[0]._id;
                    syncedPageGridItem.image = `data:${photo[0].mimetype};base64,${Buffer.from(photo[0].buffer.data).toString('base64')}`
                }
            } else if (syncedPageGridItem && syncedPageGridItem.image && syncedPageGridItem.image.includes("data:")) {
                clonedPageGridItem.image = clonedPageGridItem.imageId
            }

            if (!syncedPageGridItem.image) {
                syncedPageGridItem = formGridItem;
                clonedPageGridItem = formGridItem;
            } else {
                delete formGridItem.image;
                syncedPageGridItem = { ...syncedPageGridItem, ...formGridItem}
                clonedPageGridItem = { ...clonedPageGridItem, ...formGridItem}
            }

            clonedPageText.content.grid[i] = clonedPageGridItem;
            this.syncedPageText.content.grid[i] = syncedPageGridItem;
        }
        apiCall<{ data: { success: boolean, message: string } }>(
            "put",
            "pageText",
            { id: clonedPageText._id },
            clonedPageText
        ).then(response => {
            if (response.data.success) {
                this.$emit('onSubmit')
            }
        })
    }
    public readBuffer(id: string, formData: FormData): void {
        const reader = new FileReader();

        reader.onload = (e) => {
            const formGridIndex = this.formGrid.findIndex(gridItem => {
                return gridItem._id === id
            })

            const mutatedFormGrid = this.formGrid;
            if (e.target) {
                mutatedFormGrid[formGridIndex].image = e.target.result as string;
                this.formGrid = mutatedFormGrid;
            }
        }
        // @ts-expect-error
        reader.readAsDataURL(formData.get("files"))
    }
    public async saveImage(formData: FormData): Promise<Photo[] | void> {
        return await apiCall<{ data: { success: boolean, message: string, payload: Photo[] } }>(
            "post",
            "photo",
            {},
            formData
        )
        .then(response => response.data)
        .then((response: { success: boolean, message: string, payload: Photo[] }) => {
            if (response.success) {
                return response.payload;
            }
        })
        .catch(err => {

        });
    }
    mounted() {
        this.formGrid = JSON.parse(JSON.stringify(this.syncedPageText.content.grid));
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
    margin-bottom: 3em;
    justify-content: space-evenly;
}

.image-button {
    font-size: 14px;
    background: #B90101 !important;
    border: none !important;
    box-shadow: none;
    text-shadow: none;
    width: fit-content;
    overflow: unset;
    text-overflow: unset;
}

.image-button:hover {
    background: #B90101 !important;
}

.modal-grid-edit {
    margin-top: 3em;
}
</style>
