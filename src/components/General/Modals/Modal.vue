<template>
  <div class="modal-wrapper" v-on:blur="test">
    <div class="modal-content" :style="contentWidth">
      <slot />
      <icon-button class="close-button" :on-click="toggle" icon="times" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import IconButton from "@/components/General/Buttons/IconButton.vue";

interface ModalWidth {
  [state: string]: string;
}

const modualWidth: ModalWidth = {
  "1x": "20%",
  "2x": "40%",
  "3x": "60%",
  "4x": "80%"
};

@Component({
  components: {
    IconButton
  }
})
export default class Modal extends Vue {
  @Prop({ required: true }) open!: boolean;
  @Prop({ required: true }) toggle!: (flag?: boolean) => void;
  @Prop({ default: "4x" }) width!: string;

  mounted() {
    window.addEventListener("keydown", this.handleKeyListener);
  }

  contentWidth = `width: ${modualWidth[this.width]}`;

  private handleKeyListener(event: KeyboardEvent): void {
    if (event.keyCode === 27) this.toggle(false);
  }

  public test(): void {
    console.log("Yeet");
  }
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

  background-color: rgba($black-dark, 0.5)

.modal-content
  position: relative

  background-color: $white
  margin: auto;
  padding: 20px;

  border: 1px solid $black-light;

.close-button
  position: absolute
  top: 5px
  right: 10px
</style>
