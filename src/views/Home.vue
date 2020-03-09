<template>
  <PageWrapper>
    <Navigation />
  </PageWrapper>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Navigation from "@/components/Navigation/Navigation.vue";
import PageWrapper from "@/components/PageWrapper.vue";

@Component({
  components: {
    Navigation,
    PageWrapper
  }
})
export default class Home extends Vue {}
</script>
