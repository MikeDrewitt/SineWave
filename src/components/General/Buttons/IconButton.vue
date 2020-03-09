<template>
  <button v-on:click="onClick" class="icon-button">
    <font-awesome :icon="icon" :size="size" />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import FontAwesome from "@/components/LibraryWrappers/FontAwesome.vue";

@Component({
  components: {
    FontAwesome
  }
})
export default class IconButton extends Vue {
  @Prop({ required: true }) onClick!: () => void;
  @Prop({ required: true }) icon!: string;
  @Prop({ default: "lg" }) size!: string;
}
</script>

<style lang="sass" scoped>
.icon-button
    background: none
    color: inherit
    border: none
    padding: 0
    font: inherit
    cursor: pointer
    outline: inherit
</style>
