<template>
  <div class="side-bar_header items-center flex flex-col rounded-br-2xl">
    <h2 class="font-weight-bold">Meet & Play</h2>
    <template v-if="$auth.loggedIn">
    <div class="avatar">
      <img
        class="avatar-img"
        src="../../static/img/avatar-default.jpg"
        alt="avatar"
      />
    </div>
    <div class="authorization-description text-center">
      {{$auth.user}}
      <!-- <template>
        <span class="user-name"
          >Константин <br />
          Константинов</span
        >
        <span class="user-city d-block">Санкт-Петербург</span>
      </template> -->
    </div>
    </template>
    <nuxt-link no-prefetch to="/login" v-if="!$auth.loggedIn">
        <span class="user-authorization font-weight-bold">
          Вход&nbsp;/&nbsp;Регистрация
        </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  component: {},
}
</script>
