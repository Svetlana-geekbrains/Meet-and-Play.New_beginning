<template>
  <div
    class="modal modal-sign-up flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="flex flex-col max-w-xl w-full space-y-8">
      <div>
        <h2 class="modal-title mt-6 text-center text-3xl">Настройки</h2>
      </div>

      <form class="modal-form mt-6 space-y-6" @submit.prevent="onSubmit">
        <input type="hidden" name="remember" value="true" />
        <div class="flex flex-wrap justify-between">
          <div class="mt-4">
            <label for="name" class="block mb-2 not-sr-only">Имя</label>
            <input
              id="name"
              name="name"
              type="name"
              autocomplete="name"
              required
              class="appearance-none rounded-lg relative block w-64 h-12 px-3 py-2 border placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Ваше имя"
            />
          </div>
          <div class="mt-4">
            <label for="city" class="block mb-2 not-sr-only"> Город </label>
            <input
              id="city"
              name="city"
              type="city"
              autocomplete="city"
              required
              class="appearance-none rounded-lg relative block w-64 h-12 px-3 py-2 border placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Город"
            />
          </div>
          <div class="mt-4">
            <label for="email-address" class="block mb-2 not-sr-only">
              Email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-lg relative block w-64 h-12 px-3 py-2 border placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div class="mt-4">
            <label for="password" class="block mb-2 not-sr-only"
              >Сменить Пароль</label
            >
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-lg relative block w-64 h-12 px-3 py-2 border placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Новый пароль"
            />
          </div>
        </div>
        <div class="flex w-full justify-around">
          <button
            type="submit"
            class="btn-fill btn-fill_settings h-12 py-2 px-4 border border-transparent text-lg font-medium focus:outline-none"
          >
            Отменить изменения
          </button>
          <button
            type="submit"
            class="btn-fill btn-fill_settings h-12 py-2 px-4 border border-transparent text-lg font-medium focus:outline-none"
          >
            Сохранить изменения
          </button>
        </div>
      </form>
      <button
        class="justify-center text-black font-bold modal-msg-link"
        @click="onLogout"
      >
        Выйти из учетной записи
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  name: 'Settings',
  methods: {
    async onLogout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>
