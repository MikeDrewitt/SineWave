<template>
  <div>
    <icon-button
      class="button"
      :on-click="toggleModal"
      icon="user-circle"
      size="2x"
    />
    <modal :open="modal" v-if="modal" width="3x">
      <div class="flex">
        <text-field
          class="row"
          label="Email"
          placeholder="Email"
          :on-change="setEmail"
        />
        <text-field
          class="row"
          label="Password"
          placeholder="Password"
          :on-change="setPassword"
        />
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import IconButton from "@/components/General/Buttons/IconButton.vue";
import Modal from "@/components/General/Modals/Modal.vue";
import TextField from "@/components/General/Inputs/TextField.vue";

@Component({
  components: {
    IconButton,
    Modal,
    TextField
  }
})
export default class AccountLogin extends Vue {
  modal = false;

  email!: string;
  password!: string;

  public toggleModal(): void {
    this.modal = !this.modal;
  }

  public setEmail(value: string): void {
    this.email = value;
  }

  public setPassword(value: string): void {
    this.password = value;
  }
}
</script>

<style lang="sass" scoped>
.button
  padding: 8px
  color: $white
  cursor: pointer

.button:hover
  color: $white-dark
</style>
