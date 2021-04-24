<template>
  <div class="modal modal-sign-in">
    <nuxt-link to="/">
      <span class="modal-close"></span>
    </nuxt-link>
    <span class="modal-title">Вход</span>
    <form action="#" class="modal-form">
      <label>
        <span class="modal-name">Эл. почта</span>
        <input type="email" name="" id="" placeholder="ivan@ivanov.ru" />
      </label>
      <label>
        <span class="modal-name">Пароль</span>
        <input type="password" name="" id="" placeholder="******" />
      </label>
      <button class="btn-fill text-lg">Войти</button>
    </form>
    <span class="modal-msg">Еще не с нами?</span>
    <nuxt-link class="modal-msg-link" to="/registration">
      Зарегистрироваться
    </nuxt-link>
  </div>
</template>
