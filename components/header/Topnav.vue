<template>
  <div class="topnav">
    <Hamburger @click.prevent="store.toggleNavbar()" />

    <Logo class="topnav__logo" />
  </div>
</template>

<script setup>
import { useStore } from "~/stores/store";

const store = useStore();
</script>
