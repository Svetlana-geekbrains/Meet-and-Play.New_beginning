<template>
  <div class="side-bar_header items-center flex flex-col rounded-br-2xl">
    <h2 class="font-weight-bold">Meet & Play</h2>
    <div class="avatar">
      <img class="avatar-img" src="#" alt="avatar" />
    </div>
    <div class="authorization-description text-center">
      <!-- <template>
        <span class="user-name"
          >Константин <br />
          Константинов</span
        >
        <span class="user-city d-block">Санкт-Петербург</span>
      </template> -->
      <nuxt-link no-prefetch to="/login">
        <span class="user-authorization font-weight-bold">
          Вход&nbsp;/&nbsp;Регистрация
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  component: {},
}
</script>
