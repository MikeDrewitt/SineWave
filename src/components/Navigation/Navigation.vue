<template>
  <nav class="nav">
    <ul>
      <li>
        <navbar-link text="Home" icon="home" to="/" />
      </li>
      <li>
        <navbar-link text="Inspiration" icon="home" to="/inspiration" />
      </li>
      <li>
        <navbar-link text="Tasks" icon="home" to="/tasks" />
      </li>
      <li>
        <navbar-link text="Renovation" icon="home" to="/renovation" />
      </li>
      <li>
        <navbar-link text="Chores" icon="home" to="/chores" />
      </li>
    </ul>
    <account-login class="account" />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import AccountLogin from "@/components/Navigation/AccountLogin.vue";
import NavbarLink from "@/components/Navigation/NavbarLink.vue";

@Component({
  components: {
    AccountLogin,
    NavbarLink
  }
})
export default class Navigation extends Vue {}
</script>

<style lang="sass" scoped>
nav
  width: 100%
  height: 50px

  background-color: $primary

  display: flex
  flex-wrap: wrap
  justify-content: center

  li
    flex: 0 1 auto
    list-style-type: none
    display: inline-block
    padding: 0 10px 0 10px

  a
    text-decoration: none
    color: $white
    font-weight: bold

  a:hover
    color: $white-dark
    text-decoration: underline

.account
  right: 5px
  position: absolute
  text-align: center
</style>
