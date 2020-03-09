<template>
  <div class="modal-wrapper">
    <div class="modal-content" :style="contentWidth">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface ModalWidth {
  [state: string]: string;
}

const modualWidth: ModalWidth = {
  "1x": "20%",
  "2x": "40%",
  "3x": "60%",
  "4x": "80%"
};

@Component
export default class Modal extends Vue {
  @Prop({ default: false }) open!: boolean;
  @Prop({ default: "4x" }) width!: string;

  contentWidth = `width: ${modualWidth[this.width]}`;
}
</script>

<style lang="sass" scoped>
.modal-wrapper
    padding-top: 200px

    position: fixed
    z-index: 1

    left: 0
    top: 0
    width: 100%
    height: 100%

    overflow: auto

    border-radius: 3px

    background-color: rgba($black-dark, 0.75)

.modal-content
    background-color: $white
    margin: auto;
    padding: 20px;

    border: 1px solid $black;
    box-shadow: 2px 2px rgba($black, .9);
</style>
