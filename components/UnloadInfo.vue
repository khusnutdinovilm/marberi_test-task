<template>
  <div class="unloading-info block">
    <div class="unloading-info__wrapper">
      <div class="unloading-info__title text-bold">Ссылка для скачивания архива Выгрузки (.zip):</div>

      <div class="unloading-info__link-group">
        <a :href="unloading.link" class="link" target="_blank"> {{ unloading.link }} </a>
        <span class="span-link" @click.prevent.stop="copyToClipboard">скопировать ссылку</span>
      </div>

      <button class="button unloading-info__button text-bold" data-color="red" @click="$emit('closeUnloadingInfo')">
        Закрыть
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  unloading: {
    type: Object,
    required: true
  }
});

const emits = defineEmits(["closeUnloadingInfo", "copiedLink"]);

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(props.unloading.link)
    .then(() => {
      emits("copiedLink");
    })
    .catch(() => {});
};
</script>

<style lang="scss">
.unloading-info {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }

  &__title {
    font-size: 16px;
  }

  &__link-group {
    display: flex;
    gap: 10px;
  }

  &__button {
    align-self: flex-end;
    margin-top: 10px;
  }
}
</style>
