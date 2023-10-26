<template>
  <div class="navbar" :class="{ 'js-change-width': isNavbarOpen }">
    <div class="navbar__inner">
      <div class="navbar__user">
        <NavbarUser />
      </div>

      <Nav />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "~/stores/store";

const store = useStore();
const { isNavbarOpen } = storeToRefs(store);
</script>
