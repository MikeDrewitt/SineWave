<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/">Inpsiration</router-link>
      </li>
      <li>
        <router-link to="/">Tasks</router-link>
      </li>
      <li>
        <router-link to="/">Renovation</router-link>
      </li>
      <li>
        <router-link to="/">Chores</router-link>
      </li>
    </ul>
    <account-login class="account" />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AccountLogin from "@/components/Navigation/AccountLogin.vue";

@Component({
  components: {
    AccountLogin
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
