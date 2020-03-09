<template>
  <div class="page-wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageWrapper extends Vue {}
</script>

<style lang="sass" scoped>
.page-wrapper
  width: 100%
  height: 100%
</style>
