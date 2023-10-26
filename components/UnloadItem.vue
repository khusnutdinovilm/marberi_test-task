<template>
  <div class="block unloading" :class="unloadingStatus">
    <div class="unloading__wrapper">
      <div class="unloading__row">
        Задача выполнена: <span class="text-bold">{{ unloading.date }}</span>
      </div>

      <div class="unloading__row">
        Статус задачи: <span class="text-bold">{{ unloading.status_text }}</span>
      </div>

      <div class="unloading__row">
        ID выгрузки: <span class="text-bold">{{ unloading.id }}</span>
      </div>

      <div class="unloading__row">
        Размер выгрузки: <span class="text-bold">{{ unloading.size }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  unloading: {
    type: Object,
    required: true
  }
});

const unloadingStatus = computed(() => (props.unloading.status === "green" ? "unloading_success" : "unloading_danger"));
</script>

<style lang="scss">
.unloading {
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;

  &__wrapper {
    padding: 15px;
  }

  &_success {
    border-left: 10px solid var(--color_success);
  }

  &_danger {
    border-left: 10px solid var(--color_danger);
  }
}
</style>
