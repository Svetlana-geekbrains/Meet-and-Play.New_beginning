<template>
  <validation-observer
    ref="authForm"
    class="modal modal-sign-in py-12 px-4 sm:px-6 lg:px-8"
  >
    <nuxt-link to="/">
      <span class="modal-close"></span>
    </nuxt-link>
    <form action="#" class="modal-form" @submit.prevent="onLogin()">
      <div class="" v-if="loginFormError">
        {{ loginFormError }}
      </div>
      <validation-provider
        name="email"
        rules="email|required"
        mode="lazy"
        slim
        v-slot="{ errors }"
      >
        <label>
          <span class="modal-name">Электронная почта</span>
          <input
            type="email"
            name="email"
            id="2"
            placeholder="ivan@ivanov.ru"
            v-model="loginForm.email"
          />
        </label>
        <small
          class="text-red-500"
          v-for="(error, key) in errors"
          :key="`email-${key}`"
          v-show="errors"
          >{{ error }}</small
        >
      </validation-provider>
      <validation-provider
        name="password"
        rules="required"
        mode="lazy"
        slim
        v-slot="{ errors }"
      >
        <label>
          <span class="modal-name">Пароль</span>
          <input
            type="password"
            name="password"
            id="1"
            placeholder="******"
            v-model="loginForm.password"
          />
        </label>
        <small
          class="text-red-500"
          v-for="(error, key) in errors"
          :key="`password-${key}`"
          v-show="errors"
          >{{ error }}</small
        >
      </validation-provider>
      <button class="btn-fill text-lg">Войти</button>
      <span class="modal-msg">Еще не с нами?</span>
      <nuxt-link to="Registration" class="modal-msg-link">
        Зарегистрироваться
      </nuxt-link>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    loginForm: {
      email: '',
      password: '',
    },
    loginFormError: null,
  }),
  methods: {
    async onLogin() {
      const isCorrect = await this.$refs.authForm.validate()
      if (isCorrect) {
        try {
          let response = await this.$auth.loginWith('local', {
            data: this.loginForm,
          })
          await this.$router.push('/myMeetings')
          // console.log(response)
        } catch (err) {
          // console.log(err.response.data.message)
          this.loginFormError = err.response.data.message
        }
      }
    },
  },
}
</script>
