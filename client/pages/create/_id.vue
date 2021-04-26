<template>
  <section class="views-main">
    <h2 v-if="meetingId" class="views-main__title d-inline-block">Редактировать встречу</h2>
    <h2 v-else class="views-main__title d-inline-block">Создать встречу</h2>
    <button class="btn-search btn d-block" type="button">Найти игру</button>
    <!--    <div class="mt-16 w-8/12">-->
    <crud-form
      v-if="model"
      :form-schema="schema"
      :form-model="model"
      @on-submit="onFormSubmit"
    />
    <p class="text-red-500">
      {{ error }}
    </p>
    <!-- <form class="grid grid-cols-2 gap-y-4 gap-x-8">
      <div class="relative">
        <label for="name-with-name" class="text-gray-700">
          Название встречи
        </label>
        <input
          type="text"
          id="name-with-name"
          class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>
      <div class="relative">
        <label for="name-with-city" class="text-gray-700"> Город </label>
        <input
          type="text"
          id="name-with-city"
          class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>
      <div class="relative">
        <label for="name-with-label" class="text-gray-700"> Адрес </label>
        <input
          type="text"
          id="name-with-label"
          class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>
      <div class="relative">
        <label for="name-with-sport" class="text-gray-700">
          <span class="text-gray-700">Спорт</span>
          <select
            class="form-select block mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <svg
              fill="#e2e8f0"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
            <option>Выбери из списка</option>
            <option>Футбол</option>
            <option>Баскетбол</option>
            <option>Волейбол</option>
            <option>Тенис</option>
          </select>
        </label>
      </div>
      <div class="relative inline-block mr-8 pt-6">
        <label for="data" class="text-gray-700"> Дата </label>
        <input
          type="data"
          id="data"
          class="input_data block mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>
      <div class="relative inline-block mr-8 pt-6">
        <label class="text-gray-700" for="time"> Время </label>
        <input
          type="time"
          id="time"
          class="input_time block mt-2 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1"
        />
      </div>
      <div class="relative inline-block mr-8">
        <label for="name-with-ammount" class="text-gray-700">
          Количество <br />
          участников
        </label>
        <input
          type="text"
          id="name-with-ammount"
          class="block mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-20 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>
    </form>
    <button
      type="button"
      class="mt-6 py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white text-center text-base shadow-md focus:outline-none rounded-lg"
    >
      Создать встречу
    </button> -->
    <!--    </div>-->
  </section>
</template>

<script>
// State
import {mapActions, mapGetters} from 'vuex';
// Setups
import {schema} from "~/pages/create/fields";
//Mixins
import {relationsMixin} from "~/mixins/relation";

export default {
  middleware: 'auth',
  mixins: [relationsMixin],
  components: {
    CrudForm: () => import('~/components/CrudForm')
  },
  computed: {
    ...mapGetters({
      meeting: 'meetings/item',
      error: 'meetings/itemError',
      categories: 'categories/items'
    }),
    isUpdating: ({
                   $route: {
                     params: {id},
                   },
                 }) => id !== undefined,
    meetingId() {
      return this.$route.params.id;
    }
  },
  data: () => ({
    model: null,
    schema
  }),
  async mounted() {
    await this.fetchCategories()
    for (const category in this.categories) {
      this.setFields({ fieldKey: 'categories', values: Object.values(this.categories[category]) })
      // Переделать
    }

    // this.setFields({ fieldKey: 'categories', values: Object.values(this.categories) })
    if (this.isUpdating) {
      await this.fetchMeeting(this.$route.params.id)
      for (const item in this.meeting) {
        this.model = {...this.meeting[item]}
        // Переделать
      }
      return
    }
    this.setModel()
  },
  methods: {
    ...mapActions({
      // generic
      createMeeting: 'meetings/create',
      fetchMeeting: 'meetings/fetchOne',
      updateMeeting: 'meetings/update',

      // logic
      fetchCategories: 'categories/fetchAll'
    }),
    setModel() {
      this.model = {
        title: '',
        city: '',
        address: '',
        count: 0,
        date: '',
        time: '',
        categories: {
          title: ''
        }
      }
    },
    async onMeetUpdate() {

      await this.updateMeeting({id: this.$route.params.id, payload: this.model})
      this.$router.back()
    },
    async onMeetCreate() {
      await this.createMeeting(this.model)
      this.$router.back()
    },
    async onFormSubmit() {
      if (this.isUpdating) {
        this.onMeetUpdate()
        return
      }
      this.onMeetCreate()
    },
  },
}
</script>

<style lang="scss">
.input_data {
  width: 200px;
}

.input_time {
  width: 150px;
}
</style>
