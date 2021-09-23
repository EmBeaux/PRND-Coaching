<template>
    <div class="testimonial-grid">
      <div v-for="(gridItem, i) in grid" :key="gridItem.title + i" class="testimonial-grid-item">
        <div class="testimonial-body">
            {{ gridItem.description }}
        </div>
        <div class="testimonial-title">
          <div class="testimonial-job"> {{ gridItem.title }} </div>
          <div class="testimonial-name"> {{ gridItem.name }} </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { GridItem } from '../types/content-page.types';

@Component
export default class GridTestimonial extends Vue {
    @Prop() readonly grid: GridItem[]
}
</script>

<style>
</style>
