<template>
  <font-awesome-icon :icon="icon" :size="size" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserCircle);

@Component({
  components: {
    FontAwesomeIcon
  }
})
export default class FontAwesome extends Vue {
  @Prop({ required: true }) icon!: string;
  @Prop({ default: "lg" }) size!: string;
}
</script>

<style lang="sass" scoped></style>
