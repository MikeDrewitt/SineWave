<template>
  <router-link :to="to">
    {{ text }}
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NavbarLink extends Vue {
  @Prop({ required: true }) text!: string;
  @Prop({ required: true }) icon!: string;
  @Prop({ required: true }) to!: string;
}
</script>

<style lang="sass" scoped></style>
