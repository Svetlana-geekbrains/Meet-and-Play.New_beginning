<template>
  <section class="views-main">
    <div v-for="(meet, key) in meeting" :key="key" >
    <h2 class="views-main__title d-inline-block">Моя встреча - {{meet.sportType}}</h2>
    <button class="btn-search btn d-block" type="button">Найти игру</button>
    <div class="meetings-container">
      <div>
        <MeetingInfo :info="meet"/>
        <MeetingMembers :members="members"/>
        <div class="meetings-btns">
          <button class="btn" type="button" @click="handleEdit(meet._id)"> Редактировать</button>
          <button class="btn btn-meetings" type="button" @click="handleDelete(meet._id)"> Отменить встречу</button>
        </div>
      </div>
      <MeetingsDiscussion :discussions="discussions"/>
    </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  middleware: 'auth',
  components: {
    MeetingInfo: () => import('~/components/MeetingInfo'),
    MeetingMembers: () => import('~/components/MeetingMembers'),
    MeetingsDiscussion: () => import('~/components/MeetingDiscussion'),
  },
  computed: {
    ...mapGetters({
      meeting: 'meetings/item'
    }),
    isUpdated: ({
                  $route: {
                    params: { id },
                  },
                }) => id !== undefined,
  },
  methods: {
    handleEdit(id) {
      this.$router.push(`/create/${id}`)
    },
    handleDelete(id) {
      this.deleteMeeting(id)
      this.$router.back()
    },
    ...mapActions({
      fetchMeeting: 'meetings/fetchOne',
      deleteMeeting: 'meetings/delete'
    })
  },
  async mounted() {
    if (this.isUpdated) {
      await this.fetchMeeting(this.$route.params.id)
      return
    }
  },
  data: () => ({
    // info: [
    //   {key: "", name: 'Адрес', content: 'г. Москва, ул, Садовая 116 б (Школа №11)'},
    //   {key: "", name: 'Спорт', content: 'Футбол'},
    //   {key: "", name: 'Дата', content: '24 марта 2021'},
    //   {key: "", name: 'Время', content: '18:00'},
    //   {key: "", name: 'Участники', content: '(15 из 20)'},
    // ],
    members: [
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
      {key: '', img: '', name: 'Ким Илья'},
    ],
    discussions: [
      {key: '', name: 'Логачев Артем', content: 'Приду пораньше на поле, проверю покрытие'},
      {
        key: '',
        name: 'Пивоваров Паша',
        content: 'Я первый раз иду на игру через этот сервис, реально нужно всем желающим играть нужно регистрироваться?'
      },
      {
        key: '',
        name: 'Петров Ян',
        content: 'Паша, да. Что бы лишние люди не пришли, а то будут смотреть как мы играем)))'
      },
      {key: '', name: 'Пивоваров Паша', content: 'Ясно. Спасибо'},
    ],
  }),
}
</script>
