<template>
  <section class="views-main">
    <h2 v-if="meetingId" class="views-main__title d-inline-block">
      Редактировать встречу
    </h2>
    <h2 v-else class="views-main__title d-inline-block">Создать встречу</h2>
    <!-- <button class="btn-search btn d-block" type="button">Найти игру</button> Скрыли, для расширения дальнейшего функционала -->
    <crud-form
      v-if="model"
      :form-schema="schema"
      :form-model="model"
      @on-submit="onFormSubmit"
    />
    <p class="text-red-500">
      {{ error }}
    </p>
  </section>
</template>

<script>
// State
import { mapActions, mapGetters } from 'vuex'
// Setups
import { schema } from '~/pages/create/fields'
//Mixins
import { relationsMixin } from '~/mixins/relation'

export default {
  middleware: 'auth',
  mixins: [relationsMixin],
  components: {
    CrudForm: () => import('~/components/CrudForm'),
  },
  computed: {
    ...mapGetters({
      meeting: 'meetings/item',
      error: 'meetings/itemError',
      categories: 'categories/items',
    }),
    isUpdating: ({
      $route: {
        params: { id },
      },
    }) => id !== undefined,
    meetingId() {
      return this.$route.params.id
    },
  },
  data: () => ({
    model: null,
    schema,
  }),
  async mounted() {
    await this.fetchCategories()
    for (const category in this.categories) {
      this.setFields({
        fieldKey: 'categories',
        values: Object.values(this.categories[category]),
      })
      // Переделать
    }

    // this.setFields({ fieldKey: 'categories', values: Object.values(this.categories) })
    if (this.isUpdating) {
      await this.fetchMeeting(this.$route.params.id)
      for (const item in this.meeting) {
        this.model = { ...this.meeting[item] }
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
      fetchCategories: 'categories/fetchAll',
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
          title: '',
        },
      }
    },
    async onMeetUpdate() {
      await this.updateMeeting({
        id: this.$route.params.id,
        payload: this.model,
      })
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
