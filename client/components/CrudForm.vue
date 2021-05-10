<template>
  <div class="mt-16 w-8/12">
    <form @submit.prevent="validate">
      <vue-form-generator
        :schema="formSchema"
        :model="formModel"
        :options="formOptions"
        ref="form"
        @model-updated="onUpdate"
      />
      <button
        v-if="meetingId"
        type="submit"
        class="ml-3.5 mt-6 py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white text-center text-base shadow-md focus:outline-none rounded-lg"
      >
        Редактировать встречу
      </button>
      <button
        v-else
        type="submit"
        class="ml-3.5 mt-6 py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white text-center text-base shadow-md focus:outline-none rounded-lg"
      >
        Создать встречу
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    formSchema: {
      type: Object,
      default: () => {},
    },
    formModel: {
      type: Object,
      default: () => {},
    },
    formOptions: {
      type: Object,
      default: () => ({
        validateAsync: true
      }),
    },
  },
  computed: {
    meetingId() {
      return this.$route.params.id;
    }
  },
  methods: {
    async validate() {
      const errors = await this.$refs.form.validate()
      const isValid = errors.length === 0
      if (isValid) {
        this.$emit('on-submit', this.formModel)
      }
    },
    onUpdate(val, field) {
      this.$emit(`on${field}Update`, val)
    },
  },
}
</script>
