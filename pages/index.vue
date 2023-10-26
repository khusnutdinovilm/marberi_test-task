<template>
  <main class="index-page">
    <div class="index-page__wrapper">
      <h2 class="index-page__title">Тестовое задание для фирмы Марбери</h2>

      <div class="index-page__paragraph block">
        <p>
          Была создана <nuxt-link to="/lk/unload"> страница с выгрузками </nuxt-link> согласно требованиям технического задания.
        </p>
        <p>
          Реализована подгрузка данных с api, указанных в техническом задании.
        </p>
        
      </div>

      <div class="index-page__paragraph block" data-align="stretch">
        <span class="text-bold">Так же внёс следующие изменения на сайт:</span>
        <ul class="index-page__list">
          <li>Исправил ссылки для постраничной навигации по сайты: теперь, при клике на каждую ссылку в меню, не перенаправляет на страницу 404;</li>
          <li>Оживил <span class="text-bold">navbar</span>: теперь, при мобильном разрешении экрана, можно показать и скрыть меню навигации;</li>
          <li>Добавил функционал открытия и закрытия подменю;</li>
          <li>Оживил все <span class="text-bold">dropdown</span>;</li>
          <li>Добавил появление уведомления при копировании ссылки в буфер обмена;</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/components/notice/notice.scss";
@import "@/assets/styles/components/_block.scss";
@import "@/assets/styles/components/notice/data-color.scss";
@import "@/assets/styles/components/cabinet/_links.scss";

.index-page {
  &__title {
    margin-bottom: 20px;
  }

  &__paragraph {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;

    &[data-align="stretch"] {
      align-self: stretch;
    }
  }

  &__list {
    margin: 0;
  }
}
</style>
