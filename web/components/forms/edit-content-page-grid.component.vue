<template>
<div> Hello World grid</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { GridItem } from '../types/content-page.types';

@Component
export default class EditContentPageGrid extends Vue {
    @Prop() readonly grid: GridItem[]
}
</script>

<style>
</style>
