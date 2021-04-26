<template>
  <validation-observer ref="authForm">
    <form action="#" class="modal-form" @submit.prevent="onLogin()">
      <div class="" v-if="loginFormError">
        {{loginFormError}}
      </div>
      <validation-provider name="email" rules="email|required" mode="lazy" slim v-slot="{errors}">
        <label>
          <span class="modal-name">Эл. почта</span>
          <input type="email" name="email" id="2" placeholder="ivan@ivanov.ru" v-model="loginForm.email"/>
        </label>
        <small class="text-red-500" v-for="(error, key) in errors" :key="`email-${key}`" v-show="errors">{{
            error
          }}</small>
      </validation-provider>
      <validation-provider name="password" rules="required" mode="lazy" slim v-slot="{errors}">
        <label>
          <span class="modal-name">Пароль</span>
          <input type="password" name="password" id="1" placeholder="******" v-model="loginForm.password"/>
        </label>
        <small class="text-red-500" v-for="(error, key) in errors" :key="`password-${key}`" v-show="errors">{{
            error
          }}</small>
      </validation-provider>
      <button class="btn-fill text-lg">Войти</button>
    </form>
  </validation-observer>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    },
    loginFormError: null
  }),
  methods: {
    async onLogin() {
      const isCorrect = await this.$refs.authForm.validate()
      console.log(isCorrect)
      if (isCorrect) {
        try {
          let response = await this.$auth.loginWith('local', {data: this.loginForm})
          await this.$router.push('/myMeetings')
          // console.log(response)
        } catch (err) {
          // console.log(err.response.data.message)
          this.loginFormError = err.response.data.message
        }
      }
    }
  }
}
</script>
