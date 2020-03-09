<template>
  <div class="text-field">
    <label class="input-label">{{ label }}</label>
    <input :type="type" :placeholder="placeholder" v-on:change="onChange" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TextField extends Vue {
  @Prop({ required: true }) label!: string;
  @Prop({ required: true }) onChange!: (text: string) => void;

  @Prop({ default: "" }) placeholder!: string;
  @Prop({ default: "text" }) type!: string;
}
</script>

<style lang="sass" scoped>
.text-field
.input-label
    font-weight: bold
</style>
