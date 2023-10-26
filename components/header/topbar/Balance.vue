<template>
  <div class="topbar-balance">
    <div class="topbar-balance__control" @click.prevent="isBalanceMenuOpen = !isBalanceMenuOpen">
      <button class="button" data-color="purple" data-tippy-content="Основной баланс">
        <i class="fas fa-ruble-sign" />
      </button>
      0 <i class="fas fa-ruble-sign" />
    </div>

    <div class="topbar-balance__profile-menu" :data-show="isShowBalanceMenu">
      <div class="profile-menu block">
        <div class="topbar-balance__balance">
          Основной баланс
          <br />
          <span> 0 <i class="fas fa-ruble-sign" /></span>

          <button class="button" data-color="green">Пополнить баланс</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isBalanceMenuOpen = ref(false);

const isShowBalanceMenu = computed(() => (isBalanceMenuOpen.value ? "1" : "0"));
</script>
