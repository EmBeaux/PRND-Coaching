<template>
    <div v-if="loaded">
        <div v-for="element in editableElements" :key="element">
            <textarea :name="element" :id="element" :value="editableInputs[element]"> </textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
interface EditableInputs {
    [key: string]: string
}

@Component
export default class EditContentPage extends Vue {
    @Prop() readonly editableElements: string[]
    @Prop() readonly pageTextRef: Element
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
    public searchForChildren(element: Element) {
        if (element.children && element.children.length) {
            if (Object.keys(this.editableInputs).length === this.editableElements.length) {
                return;
            }
            // @ts-expect-error
            element.children.forEach(child => {
                let indexOfChild = this.editableElements.indexOf(child.className)
                if (child.children.length > 0) {
                    this.searchForChildren(child)
                }
                if (indexOfChild !== -1) {
                    let newObject = {}
                    newObject[this.editableElements[indexOfChild]] = child.innerText.trim();
                    this.editableInputs = newObject
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
