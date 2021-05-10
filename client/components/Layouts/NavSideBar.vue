<template>
  <div class="side-bar_header items-center flex flex-col rounded-br-2xl">
    <h2 class="font-weight-bold">Meet & Play</h2>
    <template>
      <div class="avatar">
        <img
          v-if="$auth.loggedIn"
          class="avatar-img"
          src="../../static/img/avatar-default.jpg"
          alt="avatar"
        />
      </div>
      <template v-if="$auth.loggedIn" class="authorization-description">
        <span class="user-name">{{ $auth.user }}</span>
        <span class="user-city d-block">Санкт-Петербург</span>
      </template>
    </template>
    <nuxt-link
      no-prefetch
      to="/login"
      v-if="!$auth.loggedIn"
      class="mt-8 mb-16"
    >
      <span class="user-authorization"> Вход&nbsp;/&nbsp;Регистрация </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  component: {},
}
</script>
