<template>
  <div>
    <icon-button
      class="icon-button"
      :on-click="toggleModal"
      icon="user-circle"
      size="2x"
    />
    <modal v-if="modal" :open="modal" :toggle="toggleModal" width="2x">
      <form class="flex">
        <h2 class="title">Login</h2>
        <div class="form-fields">
          <text-field
            class="row"
            placeholder="Email"
            type="email"
            :on-change="setEmail"
          />
          <text-field
            class="row"
            placeholder="Password"
            type="password"
            :on-change="setPassword"
          />
          <Button
            class="button"
            type="submit"
            :on-click="login"
            :primary="true"
          >
            Log In
          </Button>
        </div>
      </form>
    </modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Button from "@/components/General/Buttons/Button.vue";
import IconButton from "@/components/General/Buttons/IconButton.vue";
import Modal from "@/components/General/Modals/Modal.vue";
import TextField from "@/components/General/Inputs/TextField.vue";

@Component({
  components: {
    Button,
    IconButton,
    Modal,
    TextField
  }
})
export default class AccountLogin extends Vue {
  modal = false;

  email!: string;
  password!: string;

  public login(): void {
    console.log("Make request");
  }

  public toggleModal(flag?: boolean): void {
    if (typeof flag === "boolean" && flag) this.modal = flag;
    else this.modal = !this.modal;
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

.icon-button
  padding: 8px
  color: $white
  cursor: pointer

.icon-button:hover
  color: $white-dark

.form-fields
  height: 100px

.flex
  justify-content: center
  align-content: flex-start
  height: 300px

.title
  width: 100%
  height: 50px

.row
  width: 300px
  height: 50px

.button
  width: 200px
  height: 35px

  margin-top: 25px
</style>
