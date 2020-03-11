<template>
  <div class="text-field">
    <label v-if="label" class="input-label">{{ label }}</label>
    <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      v-on:change="onChange"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TextField extends Vue {
  @Prop({ default: "" }) label!: string;
  @Prop({ required: true }) onChange!: (text: string) => void;

  @Prop({ default: "" }) placeholder!: string;
  @Prop({ default: "text" }) type!: string;
}
</script>

<style lang="sass" scoped>
.text-field
    width: 100%

    flex-wrap: wrap

    margin: 5px 0

.input-label
    width: 100%
    font-weight: bold
    text-align: left

.input
    width: 100%
    height: 30px

    font-size: 16px

    border-top-style: hidden
    border-right-style: hidden
    border-left-style: hidden
    border-bottom-style: hidden

    border-radius: 2px
    padding: 3px

input:focus
    outline: none
    border-bottom-color: $accent-light
</style>
