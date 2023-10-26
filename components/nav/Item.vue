<template>
  <li class="nav__item" :class="{ nav__item_pd: isGap }">
    <nuxt-link
      :to="item.link.href"
      class="nav__item-link"
      v-bind="item.link.attrs"
      :class="{ 'nav__item-link_sub-menu': isSubMenu }"
      :target="item.link.attrs?.target"
    >
      <span v-if="item.link.classIcon" class="nav__icon">
        <i :class="item.link.classIcon" />
      </span>

      <div class="nav__title">
        {{ item.link.title }}
      </div>

      <div v-if="isSubMenu" class="nav__toggle-sub" data-open="0" @click.prevent="isSubmenuOpen = !isSubmenuOpen">
        <span class="nav__arrow-link">
          <i class="far fa-angle-down" />
        </span>
      </div>
    </nuxt-link>

    <!-- Подменю -->
    <div v-if="isSubMenu" class="nav__sub-menu" :data-active="isSubmenuOpen ? 'active' : ''">
      <ul class="nav__lists">
        <li v-for="subItem of item.subMenu" :key="subItem.id" class="nav__item nav__item_pd">
          <nuxt-link class="nav__item-link nav__item-link_sub" :to="subItem.link.href" :target="subItem.link.attrs?.target">
            <span class="nav__icon">
              <i :class="subItem.link.classIcon" />
            </span>

            <div class="nav__title nav__title_sm">
              {{ subItem.link.title }}
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isGap: {
    type: Boolean,
    default: true
  }
});

const isSubMenu = computed(() => props.item?.subMenu?.length);

const isSubmenuOpen = ref(false);
</script>
