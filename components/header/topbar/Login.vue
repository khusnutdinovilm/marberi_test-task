<template>
  <div class="user-data" @click.prevent="isProfileMenuOpen = !isProfileMenuOpen">
    <div class="user-data__name">Даша Казанцева</div>

    <div class="user-data__photo">
      <div class="user-data__icon"><i class="far fa-user-astronaut" /></div>
    </div>

    <div class="user-data__arrow"><i class="far fa-angle-down" /></div>
  </div>

  <div class="topbar__profile-menu" :data-show="isShowProfileMenu">
    <div class="profile-menu">
      <ul class="select-lists block profile-menu__select-list">
        <li class="select-lists__item">
          <nuxt-link to="/profile">Профиль</nuxt-link>
        </li>
        <li class="select-lists__item top-bar">
          <nuxt-link to="/">Редактирование</nuxt-link>
        </li>
        <li class="select-lists__item">
          <nuxt-link to="/manager?section=settings">Настройки</nuxt-link>
        </li>
        <li class="select-lists__item top-bar">Выход</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isProfileMenuOpen = ref(false);

const isShowProfileMenu = computed(() => (isProfileMenuOpen.value ? "1" : "0"));
</script>
