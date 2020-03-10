<template>
  <button
    class="button"
    v-bind:class="{ primary, accent }"
    :type="type"
    v-on:click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  mounted() {
    if (!this.primary && !this.accent)
      throw new Error("Button requires either primary or accent prop");
  }

  @Prop({ required: true }) onClick!: () => void;
  @Prop({ default: "button" }) type!: string;
  @Prop({ default: false }) primary!: boolean;
  @Prop({ default: false }) accent!: boolean;
  @Prop({ default: false }) disabled!: boolean;
}
</script>

<style lang="sass" scoped>
.button
    font-size: 18px
    border-radius: 3px
    border-style: hidden
    cursor: pointer

.primary
    background-color: $primary-light
    color: $white

.primary:hover
    background-color: $primary

.primary:focus
    background-color: $primary

.accent
    background-color: $accent-light
    color: $white

.accent:hover
    background-color: $accent

.accent:focus
    background-color: $accent
</style>
