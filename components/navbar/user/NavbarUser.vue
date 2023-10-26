<template>
  <div class="navbar-user">
    <NavbarUserControl @click="isUserListOpen = !isUserListOpen" />

    <div class="navbar-user__list" :class="{ 'navbar-user__list_show': isUserListOpen }">
      <NavbarUserList />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isUserListOpen = ref(false);
</script>

<style lang="scss">
.navbar-user__list_show {
  display: block;
}
</style>
