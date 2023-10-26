<template>
  <div class="information-block block">
    <div class="information-block__wrapper">
      <div class="information-block__title text-bold">{{ pageInformation.title }}</div>
      <div class="information-block__content">
        <div class="text-bold">Выполняет работу:</div>
        <div v-for="operation in pageInformation.operations" :key="operation" class="information-block__operation">
          - {{ operation }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pageInformation: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss">
.information-block {
  &__wrapper {
    padding: 15px;
  }

  &__title {
    font-size: 20px;

    @include active-by(xslg) {
      font-size: 18px;
    }
  }
}
</style>
