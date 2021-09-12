<template>
    <div v-if="loaded">
        <!-- <div v-for="element in pageText.editableElements" :key="element">
            <textarea :name="element" :id="element" :value="editableInputs[element]" v-on:input="editableInputChange(element, $event.target.value)"> </textarea>
        </div> -->
        <div v-html="pageTextRef.innerHTML" />
        <button @click="submitContentPage"> Submit </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { apiCall } from '../../library/api.helper';
import { PageText } from '../types/content-page.types';

interface EditableInputs {
    [key: string]: string
}

@Component
export default class EditContentPage extends Vue {
    @Prop() readonly pageText: PageText
    @Prop() readonly pageTextRef: Element
    @Prop() readonly id: string
    private xeditableInputs: EditableInputs = {};
    private xloaded: boolean = false;

    public get editableInputs(): EditableInputs {
        return this.xeditableInputs;
    }
    public set editableInputs(value: EditableInputs) {
        this.xeditableInputs = { ...this.xeditableInputs, ...value };
    }
    public get loaded(): boolean {
        return this.xloaded;
    }
    public set loaded(value: boolean) {
        this.xloaded = value
    }
    public async submitContentPage() {
        await this.searchForChildren(this.pageTextRef, true)
        let stringifiedPageText = "";
        // @ts-expect-error
        this.pageTextRef.children.forEach(child => {
            stringifiedPageText += `${child.outerHTML}`
        })
        const pageTextClone = this.pageText;
        pageTextClone.content.main = stringifiedPageText;
        pageTextClone.content.grid.forEach(gridItem => {
            if (gridItem.image && gridItem.image.includes("data:")) {
                gridItem.image = gridItem.imageId
            }
        })
        apiCall<{ data: { success: boolean, message: string } }>(
            "put",
            "pageText",
            { id: this.id },
            pageTextClone
        ).then(response => {
            if (response.data.success) {
                this.$emit('onSubmit')
            }
        })

    }
    public editableInputChange(key: string, value: string) {
        let newObject: EditableInputs = {}
        newObject[key] = value;
        this.editableInputs = newObject
        
    }
    public searchForChildren(element: Element, update?: boolean) {
        if (element.children && element.children.length) {
            if (Object.keys(this.editableInputs).length === this.pageText.editableElements.length && !update) {
                return;
            }
            // @ts-expect-error
            element.children.forEach(child => {
                if (child.children.length > 0) {
                    this.searchForChildren(child, update)
                }
                let indexOfChild = this.pageText.editableElements.indexOf(child.className)
                if (indexOfChild !== -1) {
                    if (update) {
                        let newChild = child.cloneNode(true)
                        // @ts-expect-error
                        newChild.innerHTML = document.getElementsByClassName(child.className)[0].children[0].value
                        element.replaceChild(newChild, child)
                    } else {
                        let newChild = child.cloneNode(true)
                        newChild.innerHTML = `<textarea>${child.innerText.trim()}</textarea>`;
                        element.replaceChild(newChild, child);
                    }
                    return;
                }
            })
        }
    }
    async mounted() {
        await this.searchForChildren(this.pageTextRef)
        this.loaded = true;
    }
}
</script>

<style>
</style>
