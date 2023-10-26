<template>
  <main class="unload">
    <div class="unload__wrapper">
      <div class="unload__info-block">
        <InformationBlock :page-information="pageInformation" />
      </div>

      <div v-if="isUnloadingOpen" class="unload__info">
        <UnloadInfo :unloading="chosenUnloading" @close-unloading-info="onCloseUnloadingInfo" />
      </div>
      <div v-else class="notice unload__notice" data-color="light-purple">
        Для того, чтобы просмотреть информацию о <span class="text-bold">выгрузке</span>, а также её скачать, нажмите на
        требуемуе выгрузку в столбце слева.
      </div>

      <div class="unload__list">
        <UnloadItem
          v-for="unloading in unloadingList"
          :key="unloading.id"
          :unloading="unloading"
          @click.prevent="openUnload(unloading.id)"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
const url = "https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get";
const { data: unloadingList } = await useAPIFetch(url, {
  transform: data => JSON.parse(data).response.data
});

const pageInformation = ref({
  title: "Выгрузка",
  operations: ["Собирает фотографии из заказов пользователей.", "Выгружает по папкам."]
});
const isUnloadingOpen = ref(false);

const fetchUnloadById = async unloadId => {
  const url = `https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get&unload_id=${unloadId}`;

  const { data: unload } = await useAPIFetch(url, { transform: data => JSON.parse(data).response.data[0] });

  return unload.value;
};

const chosenUnloading = ref({});
const openUnload = async id => {
  const unload = await fetchUnloadById(id);
  chosenUnloading.value = {
    id: unload.id,
    link: unload.download_link
  };
  isUnloadingOpen.value = true;
};

const onCloseUnloadingInfo = () => (isUnloadingOpen.value = false);
</script>

<style lang="scss">
.unload {
  font-size: 14px;
  line-height: 1.2;

  &__info-block {
    grid-area: a;
    align-self: start;
    margin-bottom: 15px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    grid-area: c;
    align-self: start;
  }

  &__info {
    grid-area: b;
    @include active-by(xslg) {
      margin-bottom: 15px;
    }
  }

  &__notice {
    align-self: flex-start;
  }

  &__wrapper {
    display: grid;
    grid-template-areas: "a b" "c .";
    grid-template-columns: 35% auto;
    column-gap: 15px;

    @include active-by(xslg) {
      grid-template-columns: 1fr;
      grid-template-areas: "a" "b" "c";
    }
  }
}

.unload__notice,
.unload__info {
  position: sticky;
  top: 15px;
}

.unload__notice {
  @include active-by(xslg) {
    display: none;
  }
}
</style>