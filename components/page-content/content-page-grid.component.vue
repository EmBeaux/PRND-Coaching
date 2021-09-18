<template>
    <div v-if="$route.name">
        <GridTestimonial v-if="$route.name === 'testimonials'" :grid="grid" />
        <GridCard v-else :grid="grid" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import GridCard from "./grid-card.component.vue"
import GridTestimonial from "./grid-testimonial.component.vue"
import { GridItem } from '../types/content-page.types';

@Component({
    components: { GridCard, GridTestimonial }
})
export default class ContentPageGrid extends Vue {
    @Prop() readonly grid: GridItem[]
}
</script>

<style>
</style>
